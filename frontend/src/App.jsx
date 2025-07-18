// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import FloatingShape from './components/FloatingShape.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignupPage.jsx'

function App() {

  return (
    <div
			className='min-h-screen bg-gradient-to-br
    from-gray-900 via-blue-900 to-sky-900 flex items-center justify-center relative overflow-hidden'
		>
      <FloatingShape color='bg-blue-500' size='w-64 h-64' top='-5%' left='10%' delay={0} />
			<FloatingShape color='bg-sky-500' size='w-48 h-48' top='70%' left='80%' delay={5} />
			<FloatingShape color='bg-purple-500' size='w-32 h-32' top='40%' left='-10%' delay={2} />

      <Routes>
				{/* <Route
					path='/'
					element={
						<ProtectedRoute>
							<DashboardPage />
						</ProtectedRoute>
					}
				/> */}
				<Route
					path='/signup'
					element={
						// <RedirectAuthenticatedUser>
							<SignUpPage />
						// </RedirectAuthenticatedUser>
					}
				/>
				<Route
					path='/login'
					element={
						// <RedirectAuthenticatedUser>
							<LoginPage />
						// </RedirectAuthenticatedUser>
					}
				/>
      </Routes>
    </div>
  )
}

export default App
