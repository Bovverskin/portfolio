import React from "react"

const ProjectCard = (props) => {
    let project = props.project
    return (

        <div key={project.id} className="overflow-hidden border">
            <img src={project.image} className="block h-auto w-full" style={{ height: '150px', objectFit: 'cover' }} />


            <div className="px-6 py-4" style={{ minHeight: '150px' }} >
                <div className="text-white font-bold text-xl mb-2">{project.name}
                    <a href={project.github} target='_blank'>
                        <img className='pr-4' style={{ height: '30px' }} src="https://image.flaticon.com/icons/png/512/37/37318.png" alt="" />
                    </a>
                    <a href={project.website} target='_blank' style={project.website ? {} : { display: 'none' }}>
                        <img className='pr-4' style={{ height: '30px' }} src="https://openclipart.org/image/300px/svg_to_png/216096/WWW-Icon.png" alt="" />
                    </a>
                </div>
                <p className="text-grey-darker text-base">
                    {project.description}
                </p>
            </div>
            <h5>Techonologies used:</h5>
                <div className='d-flex white'>
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology1} alt="" />
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology2} alt="" />
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology3} alt="" />
                    <img className='pr-4' style={{ height: '30px' }} src={project.technology4} alt="" />
                </div>

            <div className="flex items-center justify-between leading-none p-2 md:p-4">
                <button className="bg-blue-darkest hover:bg-blue-dark text-white text-xs py-1 px-2 rounded-full">
                    
                </button>
            </div>

        </div>
    )
}

export default ProjectCard