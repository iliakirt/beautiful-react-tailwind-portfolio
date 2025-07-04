import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Linkedin, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

export const ContactSection = () => {
    const formRef = useRef();
    const [successMessage, setSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

        form.submit();

        setTimeout(() => {
            form.reset();

            setTimeout(() => setSuccessMessage(false), 4000);
        }, 200);
    };

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to discuss new opportunities. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            {" "}
                            Contact Information
                        </h3>

                        <div className="space-y-6 justify-around">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className='h-6 w-6 text-primary' />{" "}
                                </div>
                                <div>
                                    <h4 className='font-medium'>Email</h4>
                                    <a
                                        href="mailto:iliakirt@gmail.com"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        iliakirt@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className='h-6 w-6 text-primary' />{" "}
                                </div>
                                <div>
                                    <h4 className='font-medium'>Phone</h4>
                                    <a
                                        href="tel:+306986848367"
                                        className='text-muted-foreground hover:text-primary transition-colors'
                                    >
                                        6986848367
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className='h-6 w-6 text-primary' />{" "}
                                </div>
                                <div>
                                    <h4 className='font-medium'>Location</h4>
                                    <a className='text-muted-foreground hover:text-primary transition-colors'>
                                        Agios Vasilios, Greece, 57200
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='pt-8'>
                            <h4 className='font-mentium mb-4'>Connect With Me</h4>
                            <div className='flex space-x-4 justify-center'>
                                <a href='https://www.linkedin.com/in/ilias-kirtsiotis/' target='_blank'>
                                    <Linkedin />
                                </a>
                                <a href='https://www.instagram.com/ilias_kirt/' target='_blank'>
                                    <Instagram />
                                </a>
                                <a href='https://www.facebook.com/hlias.kirtsiotis/' target='_blank'>
                                    <Facebook />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs'>
                        <h3 className='text-2xl font-semibold mb-6'> Send a Message</h3>

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className='space-y-6'
                            action="https://formspree.io/f/xeoknjoy"
                            method='POST'
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className='block text-sm font-mediium mb-2'
                                >
                                    {" "}
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id='name'
                                    name='name'
                                    required
                                    className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='Ilias Kirtsiotis...' />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className='block text-sm font-mediium mb-2'
                                >
                                    {" "}
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id='email'
                                    name='email'
                                    required
                                    className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='iliakirt@gmail.com' />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className='block text-sm font-mediium mb-2'
                                >
                                    {" "}
                                    Your Message
                                </label>
                                <textarea
                                    id='message'
                                    name='message'
                                    required
                                    className='w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                    placeholder="Hello, I'd like to talk about..." />
                            </div>

                            <button
                                type='submit'
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                                )}
                            >
                                Send Message
                                <Send size={16} />
                            </button>
                            {successMessage && (
                                <p className="text-green-500 text-sm mt-4 text-center animate-fade-in">
                                    ✅ Thanks for your message!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}