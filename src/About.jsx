import React from "react"
import { UndrawMayTheForce } from 'react-undraw-illustrations';

const About = () => {
    return (
        <div className="content-wrapper">
            <div className="flex flex-wrap mb-4">
                <div className="w-full lg:w-1/4 md:w-1/2">
                    <UndrawMayTheForce primaryColor='#12283a' height='200px' />
                </div>
                <div className="w-full lg:w-3/4 md:w-1/2">
                    <h1 className="content-text">Welcome to my site</h1>
                    <p className="content-text mr-20">
I was born and raised in northern California near the city of Sacramento. I grew up in a very religious home. Although my family wasn’t rich, I had a good childhood with a warm and loving family.

It wasn’t until 1988 that my world was changed by the words and music of Joe Strummer, Mick Jones, Paul Simon and Topper Headon. At the tender age of 11, my world view was rocked both literally and figuratively by The Clash.

While this my not pertain to any job opportunities, I feel this moment in time shaped who I am as a person today and gives me an understanding in culture, style and music. It opened a whole new world to me that I felt compelled to understand and study.

In the same way, technology opened up a world that I felt compelled to understand. I remember my father sitting at his Commodore 64 for hours typing in code. I had no idea what he was doing at the time but it sparked a curiosity that exists in me to this day.

Wanting to understand and manipulate technology has been a nagging hobby, passion and obsession since I first played “Oregon Trail”.

While I never took coding seriously until later in life, it is still as exciting to me as the first time I heard the lines “London calling, to the faraway towns”.</p>
                </div>

            </div>
        </div>
    )
}

export default About