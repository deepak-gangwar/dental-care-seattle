import styles from './Section3.module.scss'
import { useState } from 'react'

const accordionData = [
    {
        title: 'Dental Hygienist',
        team: 'Clinical Team',
        subtitle: `Job Description`,
        // subtitle: `We're looking for a talented Dental Hygienist to join our stellar Clinical team!`,
        content: `Welcome to Dental Care Seattle—a well-established Seattle dental office of over 30+ years in the First Hill neighborhood! We're a multiple-doctor, modern practice looking for the right candidate to join our growing team. We believe in providing high level of Periodontal care for our patients driven by excellent hygienists. We understand the value of the hygienist/patient relationship and invest our support to facilitate this relationship. Our practice is a friendly, patient-centered and patient-driven environment, equipped with a talented team of clinical and front office staff that fosters professional growth and mentorship. We offer the latest in technology with Invisalign, implant dentistry, CBCT, iTero, and rotary endodontics. This is a unique and excellent opportunity for someone motivated to step into an established practice that comes with a loyal following of patients, and a supportive team of staff.`,
        currentOpening: '3-4 days/week.',
        jobBenefits: [
            `Assistant support for quick room turnover`,
            `1 Hour prophy appointments`,
            `2 Hour SRP appointments`,
            `On time doctor exams!`,
            `ALL NEW EQUIPMENT, in a light-filled and newly-remodeled office!`,
        ],
        staffBenefits: [
            `401k plan, 401k match`,
            `Yearly profit sharing`,
            `Medical insurance and dental benefits`,
            `Free parking in the building, or an ORCA Card`,
            `Famous parties!`
        ],
        responsibilities: '',
        requirements: [
            `Dentrix knowledge`,
            `Great customer service skills`,
            `A positive and professional "can-do" attitude`,
        ],
        education: '',
        experience: '',
        type: 'Full-time',
        pay: ''
    },
    {
        title: 'Patient Care Coordinator',
        team: 'Front Office Team',
        subtitle: `Job DescriptionDesk team!`,
        // subtitle: `We're looking for our next Patient Care Coordinator to join our friendly Front Desk team!`,
        content: `Welcome to Dental Care Seattle—a well-established Seattle dental office in the First Hill neighborhood! We're a multiple-doctor, modern practice with an energetic staff looking for a responsible, outgoing team player seeking a long term stable position with room for growth and advancement. We take pride in offering state-of-the-art technology, a beautiful light-filled and modern office, and the best possible care to our patients. Not only is our staff welcoming and supportive, we feel more like family than co-workers! `,
        currentOpening: ' 3-4 days per week! ',
        jobBenefits: ``,
        staffBenefits: [
            `401k plan, 401k match`,
            `Yearly profit sharing`,
            `Medical insurance and dental benefits`,
            `Vacation and sick paid time off`,
            `Free parking in the building, or an ORCA Card`,
            `On the job training`,
            `Famous parties!`,
        ],
        responsibilities: [
            `Scheduling patient appointments`,
            `Answering phones promptly`,
            `Greeting patients warmly as they check in`,
            `Verifying patient insurance information`,
            `Responding to and sending emails`,
            `Confirming appointments`,
            `Printing schedules and patient route slips`,
            `Updating patient information`,
        ],
        requirements: [
            `Experience working in a dental office in any capacity`,
            `Proficient computer skills`,
            `Dentrix software knowledge`,
            `Great customer service skills`,
            `A positive and professional "can do" attitude`,
        ],
        education: [
            `High school or equivalent`,
        ],
        experience: `Don't have a dental or healthcare background? We'd also love to talk if you've worked in a hotel, at a salon, an office building or have held any other receptionist position and you're willing to learn!`,
        type: 'Part-time/Full-time',
        pay: '$18.00 - $25.00 per hour. Pay rate determined by experience.'
    },
    {
        title: 'Receptionist',
        team: 'Front Office Team',
        subtitle: `Job Description`,
        // subtitle: `We're looking for a talented Receptionist to join our friendly Front Desk team!`,
        content: `Welcome to Dental Care Seattle—a well-established Seattle dental office in the First Hill neighborhood! We're a multiple-doctor, modern practice with an energetic staff looking for a responsible, outgoing team player seeking a long term stable position with room for growth and advancement. We take pride in offering state-of-the-art technology, a beautiful light-filled and modern office, and the best possible care to our patients. Not only is our staff welcoming and supportive, we feel more like family than co-workers! `,
        currentOpening: ' 3-4 days per week! ',
        jobBenefits: ``,
        staffBenefits: [
            `401k plan, 401k match`,
            `Yearly profit sharing`,
            `Medical insurance and dental benefits`,
            `Vacation and sick paid time off`,
            `Free parking in the building, or an ORCA Card`,
            `On the job training`,
            `Famous parties!`,
        ],
        responsibilities: [
            `Scheduling patient appointments`,
            `Answering phones promptly`,
            `Greeting patients warmly as they check in`,
            `Verifying patient insurance information`,
            `Responding to and sending emails`,
            `Confirming appointments`,
            `Printing schedules and patient route slips`,
            `Updating patient information`,
        ],
        requirements: [
            `Experience working in a dental office in any capacity`,
            `Proficient computer skills`,
            `Dentrix software knowledge`,
            `Great customer service skills`,
            `A positive and professional "can do" attitude`,
        ],
        education: [
            `High school or equivalent`,
        ],
        experience: `Don't have a dental or healthcare background? We'd also love to talk if you've worked in a hotel, at a salon, an office building or have held any other receptionist position and you're willing to learn!`,
        type: 'Part-time/Full-time',
        pay: '$18.00 - $25.00 per hour. Pay rate determined by experience.'
    },
    {
        title: 'Dental Assistant',
        team: 'Clinical Team',
        subtitle: `Job Description`,
        // subtitle: `We're looking for a talented Dental Assistant to join our stellar Clinical team!`,
        content: `Welcome to Dental Care Seattle—a well-established Seattle dental office in the First Hill neighborhood! We're a multiple-doctor, modern practice with an energetic staff looking for a responsible, outgoing team player seeking a long term stable position with room for growth and advancement. We take pride in offering state-of-the-art technology, a beautiful light-filled and modern office, and the best possible care to our patients. Not only is our staff welcoming and supportive, we feel more like family than co-workers! `,
        currentOpening: ' 3-4 days per week! ',
        jobBenefits: ``,
        staffBenefits: [
            `401k plan, 401k match`,
            `Yearly profit sharing`,
            `Medical insurance and dental benefits`,
            `Vacation and sick paid time off`,
            `Free parking in the building, or an ORCA Card`,
            `On the job training`,
            `Famous parties!`,
        ],
        responsibilities: [
            `Chair-side assisting`,
            `Working with other assistants to keep up with sterile room and hygiene turnover`,
            `Scheduling patients`,
        ],
        requirements: [
            `Proficient computer skills`,
            `Dentrix software knowledge`,
            `Great customer service skills`,
            `2+ Years of Dental Assisting experience with STRONG clinical skills`,
            `A positive and professional "can-do" attitude`,
        ],
        education: [
            `High school education or equivalent`,
            `You must be Registered Dental Assistant in the State of Washington (New graduates welcome to apply!)`,
        ],
        experience: `Don't have a dental or healthcare background? We'd also love to talk if you've worked in a hotel, at a salon, an office building or have held any other receptionist position and you're willing to learn!`,
        type: 'Part-time/Full-time',
        pay: '$18.00 - $26.00 per hour. Pay rate determined based on experience. '
    }
];

const AccordionItem = ({ title, team, subtitle, content, currentOpening, jobBenefits, staffBenefits, responsibilities, requirements, education, experience, type, pay }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <li className={`${styles.careers__item} ${styles.grid__wrap}`}>
            {/* try moving this onclick handler to li */}
            <div className={styles.cta} onClick={() => setIsActive(!isActive)}>
                <h2 className={styles.job__title}>{title}</h2>
                <h3 className={styles.job__team}>{team}</h3>

                {isActive ? (
                    <button aria-label="open" className={`${styles.btn} ${styles.cross}`} type="button" style={{ 'transform': 'rotate(45deg)' }}></button>
                ) : (
                    <button aria-label="open" className={`${styles.btn} ${styles.cross}`} type="button"></button>
                )}
            </div>
            {isActive && (
                <div className={styles.content}>
                    <div className={styles.left__content}>
                        <p className={styles.job__subtitle}>{subtitle}</p>
                        <p className={styles.job__intro}>{content}</p>

                        {currentOpening && (
                            <>
                                <h4 className={styles.job__headings}>Current Opening</h4>
                                <p>{currentOpening}</p>
                            </>
                        )}

                        {jobBenefits && (
                            <>
                                <h4 className={styles.job__headings}>{title}s at our office enjoy</h4>
                                <ul>
                                    {jobBenefits.map((data) => (
                                        <li className={styles.job__list__item} key={data}>{data}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {staffBenefits && (
                            <>
                                <h4 className={styles.job__headings}>Our staff enjoys top-tier benefits including</h4>
                                <ul>
                                    {staffBenefits.map((data) => (
                                        <li className={styles.job__list__item} key={data}>{data}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {responsibilities && (
                            <>
                                <h4 className={styles.job__headings}>Responsibilities</h4>
                                <ul>
                                    {responsibilities.map((data) => (
                                        <li className={styles.job__list__item} key={data}>{data}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {requirements && (
                            <>
                                <h4 className={styles.job__headings}>Ideal candidates have</h4>
                                <ul>
                                    {requirements.map((data) => (
                                        <li className={styles.job__list__item} key={data}>{data}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        {education && (
                            <>
                                <h4 className={styles.job__headings}>Education</h4>
                                {education.length === 1 ? (
                                    <p key={education}>{education}</p>
                                ) : (
                                    <ul>
                                        {education.map((data) => (
                                            <li className={styles.job__list__item} key={data}>{data}</li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        )}

                        {experience && (
                            <>
                                <h4 className={styles.job__headings}>Other relevant experience</h4>
                                <p>{experience}</p>
                            </>
                        )}

                        {type && (
                            <>
                                <h4 className={styles.job__headings}>Job type</h4>
                                <p className={styles.job__pay}>{type}</p>
                            </>
                        )}

                        {pay && (
                            <>
                                <h4 className={styles.job__headings}>Pay</h4>
                                <p className={styles.job__pay}>{pay}</p>
                            </>
                        )}

                    </div>

                    <div className={styles.right__content}>
                        <p>
                            If you don&apos;t feel like you align exactly with these qualifications but think you&apos;d be a great fit for our team, please tell us why!
                        </p>
                        <p className={styles.right__email}>
                            <span className={styles.right__cta}>To apply, email us at:</span>
                            <a href="mailto:careers@dentalcareseattle.com" className='underline'>careers@dentalcareseattle.com</a>
                            {/* Include the position you&apos;re interested in and a copy of your resume. */}
                        </p>
                        <p className={styles.right__equal}>
                            <span className={styles.equal__span}>Dental Care Seattle is an equal opportunity employer.</span>.
                            We celebrate diversity and are committed to creating an inclusive environment for all employees.
                        </p>
                    </div>
                </div>
            )}
        </li>
    );
};


export default function Section3() {
    return (
        <>
            <section className={styles.container}>
                <ul className={styles.careers}>
                    {accordionData.map(({ title, team, subtitle, content, currentOpening, jobBenefits, staffBenefits, responsibilities, requirements, education, experience, type, pay }) => (
                        <AccordionItem key={title} title={title} team={team} subtitle={subtitle} content={content} currentOpening={currentOpening} jobBenefits={jobBenefits} staffBenefits={staffBenefits} responsibilities={responsibilities} requirements={requirements} education={education} experience={experience} type={type} pay={pay} />
                    ))}
                </ul>
            </section>
        </>
    )
}