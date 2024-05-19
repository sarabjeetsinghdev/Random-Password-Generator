import '@/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '@/styles/tailwind.css'
import '@/styles/custom.css'

export const metadata = {
  openGraph: {
    title: 'Random Password Generator',
    description: "Introducing our Random Password Generator, a powerful and secure tool that creates unique and complex passwords for you. With just one click, you can generate a strong password that meets the highest security standards. Our generator uses a sophisticated algorithm to create passwords that are impossible to guess, ensuring that your online accounts remain safe and secure. Whether you're creating a new account or updating an existing one, our Random Password Generator is the perfect tool for the job. Try it out today and experience the peace of mind that comes with knowing your passwords are strong and secure.",
    author: 'Sarabjeet Singh',
    creator: 'Sarabjeet Singh',
    keywords: ['password', 'generator', 'random', 'secure', 'strong', 'unique', 'complex', 'password manager', 'password generator', 'password manager tool', 'online security', 'account protection', 'password protection', 'cybersecurity', 'data protection', 'password generator tool']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-zinc-400'>
        {children}
      </body>
    </html>
  )
}
