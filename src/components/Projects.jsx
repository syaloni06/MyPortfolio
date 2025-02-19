/* eslint-disable react/prop-types */
const Projects = ({refProp}) => {
  return (
    <>
      <div
        ref={refProp}
        className="h-screen flex items-center justify-center bg-gray-100 dark:bg-black"
      >
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Project Section
        </h2>
      </div>
    </>
  )
}

export default Projects;