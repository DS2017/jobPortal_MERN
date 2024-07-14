import about from '../assets/about-1-720x480.jpg'

const Content = () =>{
    return (
        <>
    <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-36 mx-auto space-y-12 lg:space-y-20 lg:py-36 lg:px-6">
            
            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={about} alt="feature image 2"/>
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight text-gray-900 dark:text-white">Powering Prosperity around the world</h2>
                    <p className="mb-8 font-light lg:text-xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">We believe people our greatest assets - an we are hiring ! </span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Great opportunity for everyone</span>
                        </li>
                    </ul>
                    <p className="font-light lg:text-xl">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.</p>
                </div>
            </div>

          
            
        </div>
      </section>
        </>
    )
}

export default Content;