import React from 'react';
import "../components/Faq.css";

export default function Faq() {
    let FAQConstsA = [
        {
            "question" : "What is the duration of the courses?",
            "answer" : "Our courses vary in duration, ranging from a few weeks to several months, depending on the topic and complexity of the content."
        },
        {
            "question" : "How do I enroll in a course?",
            "answer" : "Our courses vary in duration, ranging from a few weeks to several months, depending on the topic and complexity of the content."
        },
        {
            "question" : "Are there any prerequisites for enrolling in courses?",
            "answer" : "Our courses vary in duration, ranging from a few weeks to several months, depending on the topic and complexity of the content."
        }
    ]
    let FAQConstsB= [
        {
            "question" : "Will I receive a certificate upon completing a course?",
            "answer" : "Our courses vary in duration, ranging from a few weeks to several months, depending on the topic and complexity of the content."
        },
        {
            "question" : "Can I switch to a different course if I change my mind?",
            "answer" : "Our courses vary in duration, ranging from a few weeks to several months, depending on the topic and complexity of the content."
        },
        {
            "question" : "How does the payment process work?",
            "answer" : "Our courses vary in duration, ranging from a few weeks to several months, depending on the topic and complexity of the content."
        }
    ]
    return (
        <div className='faqPCls'>
            <div className='faqCCls'>
                <div className='FaqheadersCls'>
                    FAQ
                </div>
                <div className='FaqContentPCls'>
                    <div className='FaqContentCCls'>
                        {FAQConstsA.map((item, index) => (
                            <div className='FaqContCardCls' key={index}>
                                <input type='checkbox' name={"FaqQuesA" + index + 1} id={"FaqQuesA" + index + 1} />
                                <label htmlFor={"FaqQuesA" + index + 1} className='faqQesLabel'>{item.question}</label>
                                <div className='FaqContCardAnsCls'>{item.answer}</div>
                            </div>
                        ))}
                    </div>
                    <div className='FaqContentCCls'>
                        {FAQConstsB.map((item, index) => (
                            <div className='FaqContCardCls' key={index}>
                                <input type='checkbox' name={"FaqQuesB" + index + 1} id={"FaqQuesB" + index + 1} />
                                <label htmlFor={"FaqQuesB" + index + 1} className='faqQesLabel'>{item.question}</label>
                                <div className='FaqContCardAnsCls'>{item.answer}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
