export default function EnvCheck() {
  const apiUrl = process.env.NEXT_PUBLIC_MAIN_API_URL;
  const apiKey = process.env.NEXT_PUBLIC_MAIN_API_KEY;
  
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Environment Variables Check</h1>
      
      <div className="space-y-4 bg-gray-800 p-6 rounded-lg">
        <div className="border-b border-gray-700 pb-4">
          <h2 className="text-xl font-semibold mb-2">NEXT_PUBLIC_MAIN_API_URL</h2>
          <p className={`font-mono ${apiUrl ? 'text-green-400' : 'text-red-400'}`}>
            {apiUrl || '❌ NOT SET'}
          </p>
        </div>
        
        <div className="border-b border-gray-700 pb-4">
          <h2 className="text-xl font-semibold mb-2">NEXT_PUBLIC_MAIN_API_KEY</h2>
          <p className={`font-mono ${apiKey ? 'text-green-400' : 'text-red-400'}`}>
            {apiKey ? `✅ SET (${apiKey.substring(0, 10)}...)` : '❌ NOT SET'}
          </p>
        </div>
        
        <div className="pt-4">
          <h2 className="text-xl font-semibold mb-2">Status</h2>
          {apiUrl && apiKey ? (
            <p className="text-green-400 font-semibold">✅ All environment variables are set correctly!</p>
          ) : (
            <div className="text-red-400">
              <p className="font-semibold mb-2">❌ Missing environment variables</p>
              <p className="text-sm text-gray-300">
                Please add the following environment variables in Vercel:
              </p>
              <ul className="list-disc list-inside mt-2 text-sm">
                {!apiUrl && <li>NEXT_PUBLIC_MAIN_API_URL</li>}
                {!apiKey && <li>NEXT_PUBLIC_MAIN_API_KEY</li>}
              </ul>
            </div>
          )}
        </div>
        
        <div className="pt-4 mt-4 border-t border-gray-700">
          <h2 className="text-xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
            <li>Go to your Vercel project dashboard</li>
            <li>Navigate to Settings → Environment Variables</li>
            <li>Add both variables with their values</li>
            <li>Redeploy your application</li>
            <li>Refresh this page to verify</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
