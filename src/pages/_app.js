import { loadParallel } from '@parallelmarkets/vanilla'
import { ParallelProvider } from '@parallelmarkets/react'

const parallel = loadParallel(
  {
    client_id: process.env.NEXT_PUBLIC_PARALLEL_CLIENT_ID,
    environment: 'demo',
    flow_type: 'overlay',
    scopes: ['profile', 'identity']
  }
)

export default function App({ Component, pageProps }) {
  return (
    <ParallelProvider parallel={parallel}>
      <Component {...pageProps} />
    </ParallelProvider>
  )
}
