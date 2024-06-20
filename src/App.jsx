import './App.css'
import landingImg from "./assets/illustration-article.svg"
import profilePic from "./assets/image-avatar.webp"

function App() {
  return (
    <main className='w-screen h-screen flex justify-center items-center '>
      <div className='w-1/4 h-fit bg-white rounded-3xl p-5 border border-black flex flex-col gap-4 max-[750px]:w-[90%]'>
        <img src={landingImg} className='w-full rounded-lg' />
        <div className='flex flex-col gap-3'>
          <span className='py-2 px-3 font-bold bg-yellow w-fit text-xs rounded-md'>Learning</span>
          <p className='font-medium text-xs'>Published 21 Dec 2023</p>
        </div>

        <h3 className='text-xl font-bold cursor-pointer hover:text-yellow'>HTML & CSS Foundations</h3>
        <div className='w-full text-wrap text-grey text-sm font-medium'>
        These languages are the backbone of every website, defining structure, content, and presentation.
        </div>

        <div className='flex gap-4 items-center mt-3'>
          <img src={profilePic} className='aspect-sqaure rounded-full w-7' />
          <span className='font-extrabold text-xs'>Greg Hooper</span>
        </div>


      </div>
    </main>

  )
}

export default App
