// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import App from './components/App/App'

// const queryClient = new QueryClient();

// createRoot(document.getElementById('root')!).render(
//     <StrictMode>
//         <QueryClientProvider client={queryClient}>
//             <App />
//         </QueryClientProvider>
//     </StrictMode>,
// )
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function QueryProvider() {

    const queryClient = new QueryClient();

    return (<QueryClientProvider client={queryClient}>

        {/* {children} */}

    </QueryClientProvider>
)
}