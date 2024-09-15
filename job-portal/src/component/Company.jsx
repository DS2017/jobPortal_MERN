import hero from '../assets/hero.png';
  import Card from './Card.jsx';

const Company = () =>{
    return (
        <>
    <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-36 mx-auto space-y-12 lg:space-y-20 lg:py-36 lg:px-6">

            <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
                <div className="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight text-gray-900 dark:text-white">Our Experties</h2>
                    <p className="mb-8 font-light lg:text-xl">Doctus omnesque duo ne, cu vel offendit erroribus. Laudem hendrerit pro ex, cum postea delectus ad. Te pro feugiat perpetua tractatos. Nam movet omnes id, usu te meis corpora. Augue doming quaestio vix at. Sumo duis ea sed, ut vix euismod lobortis prodesset, everti necessitatibus mei cu.</p>
                    
                    <p>Nam ea eripuit assueverit, invenire delicatissimi ad pro, an dicam principes duo. Paulo prodesset duo ad. Duo eu summo verear. Natum gubergren definitionem id usu, graeco cetero ius ut.</p>
                    <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                        <li className="flex space-x-3">
                            
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Continuous integration and deployment</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Development workflow</span>
                        </li>
                        <li className="flex space-x-3">
                            
                            <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Knowledge management</span>
                        </li>
                    </ul>
                  </div>
                <img className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src={hero} alt="dashboard feature image"/>
            </div>
            <div className="flex space-x-4 justify-center">
      <Card
        title="Our Marketing Manager"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text"
        imageUrl="../../public/part-time-jobs.webp"
      />

<Card
        title="HR Head"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
        imageUrl="../../public/women-jobs.webp"
      />
      </div>
        </div>
       
      </section>
      

        </>
    )
}

export default Company;