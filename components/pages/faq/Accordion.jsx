import styles from './Accordion.module.scss'
import { useState } from 'react'

const accordionData = {
    booking: [
        {
            id: 1,
            question: `How do I reschedule or cancel my appointment?`,
            answer: `Call or text us at (206) 325-0166 if you need to cancel or reschedule your appointment—just make sure to do so more than two business days before your appointment time. If you cancel or reschedule less than two business days in advance, we’ll have to charge you a fee of $80 per hour of scheduled time. This is because we've reserved that time specifically for your care, and our appointments are in very high demand.`,
        },
        {
            id: 2,
            question: `Which provider will I be seeing?`,
            answer: `If you’re a new patient, we’ll schedule you with the dentist of your preference (if you provide one at the time of booking) or you’ll be seen by a dentist who has availability on their schedule that day. Returning patients will continue to see their previous providers. If there’s someone in particular you’re hoping to be seen by, feel free to call us at (206) 325-0166. Occasionally, unexpected changes happen to our schedule and we may contact you about seeing a different provider if necessary.`,
        },
        {
            id: 3,
            question: `What if I want to reschedule with a different provider than the one I’ve been seeing?`,
            answer: `Totally fine! Just give us a call at (206) 325-0166.`,
        },
        {
            id: 4,
            question: `Can I text you instead of talking on the phone?`,
            answer: `Totally, who has time for a call these days! Our phone number works both ways, so feel free to give us a call or text us at (206) 325-0166 if you need anything.`,
        },
        {
            id: 5,
            question: `Where do I fill out my new patient paperwork?`,
            answer: `Visit the forms page to get ready for your first visit, and fill out your health history, insurance, and contact information.`,
        },
        {
            id: 6,
            question: `What services do you offer?`,
            answer: `We offer a full range of preventative, restorative, and cosmetic dental services. For preventative and restorative care, we offer routine checkups, implants, and everything in between. For cosmetic care, we’ll help you design your smile with whitening and veneers. Read more about our services.`,
        },
        {
            id: 7,
            question: `What if I need something not listed?`,
            answer: `If the specific service you need isn’t listed, call us at (206) 325-0166. Chances are we do it, or if not we’ll refer you to a trusted partner. Our experienced dentists offer a full range of preventative, restorative, and cosmetic care.`,
        },
        {
            id: 8,
            question: `How do I book a follow-up visit?`,
            answer: `At the end of your first visit, we’ll get you scheduled for your next visit before you leave. Or if you need more time to figure out your schedule, just text us or give us a call afterward at (206) 325-0166 and we’ll find you a time.`,
        },
        {
            id: 9,
            question: `Do you do pediatric dentistry?`,
            answer: `Certainly, we welcome children at our office, and recommend you bring them in for their first appointment by their first birthday.`,
        },
        {
            id: 10,
            question: `What if I want a second opinion?`,
            answer: `If another dentist has recommended that you get a procedure and you want a second opinion, we are more than happy to provide one, just give us a call at (206) 325-0166. If you’re one of our patients and we recommend a procedure, you’re more than welcome to seek a second opinion. We’ll provide you with our proposed treatment plan to take to another dentist.`,
        },
    ],
    invisalign: [
        {
            id: 1,
            question: `Do you offer Invisalign?`,
            answer: `Yes, we’re excited to offer Invisalign clear aligners at our office. Learn more about Invisalign and talk to your dentist at your next visit about if they are right for you.`,
        },
        {
            id: 2,
            question: `How long does Invisalign take?`,
            answer: `We'll first start off with a consultation to ensure you're a candidate for Invisalign. This generally takes 30 minutes. If time permits and you are a candidate, we can proceed with the treatment by scanning and taking photos which will take an additional 30 minutes—or you can come back in to begin whenever works for you.`,
        }
    ],
    visit: [
        {
            id: 1,
            question: `What if I miss my appointment?`,
            answer: `If you're more than 15 minutes late, we'll consider your appointment cancelled and you'll be charged a fee. If you've missed an appointment because you forgot, let us know so we can ensure you're receiving our helpful appointment reminder texts, emails, and calls. Call or text us at (206) 325-0166 if you need to cancel or reschedule your appointment—just make sure to do so more than two business days before your appointment time. If you cancel or reschedule less than two business days in advance, we’ll have to charge you a fee of $80 per hour of scheduled time. This is because we've reserved that time specifically for your care, and our appointments are in very high demand. If you're late for an appointment, we'll make every effort to see you as soon as possible, but keep in mind that your office visit may need to be shortened or need to be rescheduled depending on the circumstances.`,
        },
        {
            id: 2,
            question: `How long do appointments take?`,
            answer: `We schedule our appointments with enough time to give you thorough care while also making sure you’re completely comfortable and safe. A first check-up and cleaning appointment generally takes about 2 hours for new patients. Consults take about 30 minutes. A whitening treatment takes about 2.5 hours.`,
        },
        {
            id: 3,
            question: `When should I arrive for my appointment?`,
            answer: `You should arrive for your appointment right when it’s scheduled to begin. We make every effort to minimize your wait time!`,
        },
        {
            id: 4,
            question: `I’m nervous about the dentist—is there anything you can do to make me more comfortable?`,
            answer: `We’re happy to! Let us know if you’d like to talk to someone over the phone about your first visit or ask questions about specific options to help with dental anxiety. You can also listen to your favorite music on noise-cancelling headphones, and ask for a blanket if you’re cold. If you’d like, we also offer Nitrous Oxide—a safe and effective sedative to help you relax. We want to make your visit as enjoyable and painless as possible.`,
        },
        {
            id: 5,
            question: `I’d like to use a different name or pronoun than my current records show, can I do that?`,
            answer: `Absolutely, just let us know your preferred name and/or pronouns when filling out your new patient forms, or contact our front office and we’ll change that information in our records.`,
        }
    ],
};

const AccordionItem = ({ question, answer }) => {
    const [isActive, setIsActive] = useState(false)

    return (
        <li className={styles.list__item} >
            {/* try moving this onclick handler to li */}
            <div className={styles.cta} onClick={() => setIsActive(!isActive)}>
                <h3 className={styles.ques} style={isActive ? { "opacity": "1" } : { "opacity": "0.7" }}>{question}</h3>

                {isActive ? (
                    <button aria-label="open" className={`${styles.btn} ${styles.cross}`} type="button" style={{ 'transform': 'rotate(45deg)' }}></button>
                ) : (
                    <button aria-label="open" className={`${styles.btn} ${styles.cross}`} type="button"></button>
                )}
            </div>
            {isActive && (
                <p className={styles.ans}>
                    {answer}
                </p>
            )}
        </li>
    );
};


export default function Accordion({ section }) {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {section === "booking" && accordionData.booking.map(({ id, question, answer }) => (
                    <AccordionItem key={id} question={question} answer={answer} />
                ))}
                {section === "invisalign" && accordionData.invisalign.map(({ id, question, answer }) => (
                    <AccordionItem key={id} question={question} answer={answer} />
                ))}
                {section === "visit" && accordionData.visit.map(({ id, question, answer }) => (
                    <AccordionItem key={id} question={question} answer={answer} />
                ))}
            </ul>
        </div>
    )
}