export interface Env {
  CASE_DOCUMENTS: R2Bucket;
  PRIVATE_VAULT: R2Bucket;
  UPLOADS: R2Bucket;
  GENERATED_PDFS: R2Bucket;
  PUBLIC_ASSETS: R2Bucket;
  SUPABASE_URL: string;
  SUPABASE_SERVICE_ROLE_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    // Health check
    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'ok' }), {
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Signed URL request
    if (url.pathname === '/signed-url' && request.method === 'POST') {
      return handleSignedUrl(request, env);
    }

    return new Response('Not found', { status: 404 });
  },
};

async function handleSignedUrl(request: Request, env: Env): Promise<Response> {
  try {
    const { bucket, key } = await request.json() as { bucket: string; key: string };

    const bucketMap: Record<string, R2Bucket> = {
      'fl-case-documents': env.CASE_DOCUMENTS,
      'fl-private-vault': env.PRIVATE_VAULT,
      'fl-uploads': env.UPLOADS,
      'fl-generated-pdfs': env.GENERATED_PDFS,
      'fl-public-assets': env.PUBLIC_ASSETS,
    };

    const r2Bucket = bucketMap[bucket];
    if (!r2Bucket) {
      return new Response(JSON.stringify({ error: 'Invalid bucket' }), { status: 400 });
    }

    // Generate signed URL with 15 minute TTL
    const signedUrl = await r2Bucket.createMultipartUpload(key);

    return new Response(JSON.stringify({ url: signedUrl }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to generate signed URL' }), { status: 500 });
  }
}
