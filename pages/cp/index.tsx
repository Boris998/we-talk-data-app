import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";
import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import { FONTS, PRIMARY_THEME_COLORS } from "@/constants/primary-theme";

const CookiePolicy = () => {

    return <SectionWrapperContainer>
        <div className='py-24 px-10 overflow-hidden'>
            <HeadingWrapper>CODE OF CONDUCT</HeadingWrapper>
            <div className='text-left space-y-8'>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>What does this policy involve?</h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>WeTalkDATA&amp;AI’s website uses cookies.</p>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>To learn more about what cookies are, how they are used on our websites, and how to manage them, carefully read this Cookie Policy of WeTalkDATA&amp;AI. </p>
                </div>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>Cookies – what are they? </h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>A &apos;cookie&apos; is a small file containing data stored on your device&apos;s web browser when visiting specific websites.
                        Cookies may or may not contain personal data about a visitor. Why are cookies used? In order to properly work,
                        every modern website uses cookies. They have different tasks that generally make it easier and more interactive for you to use our websites.
                        For example, through cookies, we collect information about your visit and site behavior so you do not have to repeatedly submit it to us.
                        Thereby, we can recognize you next time visiting our websites and show you the information you need. Cookies help us understand how you use our
                        services so that we can constantly improve them by customizing the content and suggestions to you based on your preferences and interests.
                    </p>
                </div>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>What are the types of cookies? </h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>Depending on how long they are stored on your device, cookies are categorized as &lsquo;permanent&rsquo; and &lsquo;temporary&rsquo; (&lsquo;session&rsquo;) cookies.</p>
                    <ul className={`text-[${PRIMARY_THEME_COLORS.tertiary}] list-disc pl-[20px] ${FONTS.paragraph} pb-2`}>
                        <li>Permanent cookies are stored on your computer or mobile device for a long period of time, which can last years; </li>
                        <li>Temporary (session) cookies are used when you visit our websites,
                            but they are deleted and are not permanently stored on your device when your session is completed, for example, by closing the webpage. </li>
                    </ul>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>Depending on their features, cookies can generally be categorized as four different</p>
                    <ul className={`text-[${PRIMARY_THEME_COLORS.tertiary}] list-disc pl-[20px] ${FONTS.paragraph}`}>
                        <li>types: strictly necessary cookies; </li>
                        <li>functionality cookies;</li>
                        <li>performance cookies; </li>
                        <li>targeting or advertising cookies.</li>
                    </ul>

                    <p className='2xl:text-xl lg:text-lg md:text-md text-sm pt-6 text-white'>Strictly necessary cookies:</p>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>They are strictly necessary for our websites to perform their functions.
                        We use them, for example, to identify our users when they use our websites so that we can provide our services or we can perform and maintain the security of our services.
                        These cookies do not collect information about you that can be used for marketing or advertising.
                        Your consent to use these cookies is implied by the very use of our websites; therefore, you cannot refuse using them.
                    </p>
                    <p className='2xl:text-xl lg:text-lg md:text-md text-sm pt-6 text-white'>Functionality cookies:</p>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>These cookies deliver the various functionalities of our websites. They enable us to remember your preferences, such as font size and other preferences,
                        saving you time and effort to indicate a username every time you visit our website or to view content preferred by you.
                        When using our online services, these cookies may contain important information about your previous behavior in the product.
                    </p>
                    <p className='2xl:text-xl lg:text-lg md:text-md text-sm pt-6 text-white'>Performance cookies:</p>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>These cookies are not strictly necessary but allow us to customize your experience on our websites.
                        The information stored by &lsquo;efficiency cookies&rsquo; helps us understand how you use our websites,
                        remember and check the history of your previous visits, what you have viewed or tagged, or how you have found us.
                        We will then use such data to improve our websites and services for a better experience. We do not use the data
                        collected from these cookies for the purpose of serving an advertisement or for customizing it.
                    </p>
                    <p className='2xl:text-xl lg:text-lg md:text-md text-sm pt-6 text-white'>Targeting or advertising cookies:</p>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>Our goal is to provide visitors to our website with information that best suits them. This is achieved not only through the content of our site but also through advertisements displayed.
                        Since we need to continue displaying advertisements, we want them to be useful and relevant to you to the extent possible. </p>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>
                        In order to achieve that goal, we try to get an idea of your possible interests based on the websites that you visit and the behavior in relation to the different content and advertising.
                        Consequently, based on such interests, we adapt the displayed content and advertisements on our websites to the different user groups.
                    </p>
                </div>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>What types of cookies do we use and for what purposes? </h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>When visiting our websites, you can establish the presence of different types of cookies that are generated. We use all four types of cookies described.
                        Our websites use cookies for the following purposes:
                    </p>
                    <ul className={`text-[${PRIMARY_THEME_COLORS.tertiary}] list-disc pl-[20px] ${FONTS.paragraph}`}>
                        <li>To identify users for the provision of secure access; </li>
                        <li>To remember products added to your shopping cart or purchased during online shopping process; </li>
                        <li>To remember information, you fill out on different pages when you pay or place orders, so you do not have to fill in your data multiple times; To transmit information from one page to another, for example, when filling out a long questionnaire or when filling out a lot of data to place an online order; </li>
                        <li>To save preferred settings, such as language, location, number of search results to display, etc.; </li>
                        <li>To save the optimal preview settings, such as the size of the buffer and resolution parameters on your screen;</li>
                        <li>To read your browser settings for optimal visualization of our website on your device screen;</li>
                        <li>To easily load the website and maintain constant access to it; </li>
                        <li>To offer an option to save your account login data so you do not have to enter them each time; </li>
                        <li>To track the number of users visiting our web pages </li>
                        <li>To track the time spent by each visitor on our web pages; </li>
                        <li>To identify the sequence in which visitors visit the different pages on our website; </li>
                        <li>To make assessments of the need to improve parts of our websites; Optimization of our websites. </li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>Third party cookies: </h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>We also use third-party cookies as part of our services. These cookies are managed by the respective third parties and are not controlled by us. </p>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>These cookies help us study the market, keep track of income,
                        improve functionality and monitor compliance with our terms and conditions and the policy of use of our websites. Sometimes third parties can use their cookies on our websites.</p>
                </div>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>How to manage cookies? </h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>You can control and/or delete cookies as you wish.
                        You can delete all cookies installed on your computer, as well as set up most browsers to prevent them from being placed on your computer.
                        In the event that you do so, you may need to make changes in the settings of certain preferences each time you visit our websites, and some of the services and functions of our websites may not work.
                        How to delete all cookies from a browser (information about the most popular browsers is shown):
                        Chrome:
                        https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&amp;hl=bg Firefox:
                        https://support.mozilla.org/bg/kb/delete-cookies-remove-info-websites-stored Internet Explorer:
                        https://support.microsoft.com/bg-bg/help/278835/how-to-delete-cookie-files-in-internet-explor er
                        Safari for tablet and phone:
                        https://support.apple.com/bg-bg/HT201265
                        You can check what cookies you have saved by the most used providers of personalized advertisements and manage your choice at: http://optout.networkadvertising.org/?c=1&#35;!
                    </p>
                </div>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>Changes to our cookie policy </h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>We reserve the right to change this Cookie Policy and therefore we recommend that you periodically review its content.
                        Any future amendments to our Cookie Policy will be posted on this page from which time amendments shall be deemed effective, unless otherwise stated. This policy is valid as of 25.05.2018
                    </p>
                </div>
                <div>
                    <h2 className='font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl text-white'>Questions and Feedback </h2>
                    <p className={`text-[${PRIMARY_THEME_COLORS.tertiary}] py-1 ${FONTS.paragraph}`}>Please send your questions and comments about cookies or privacy at: hello&#64;wetalkdata.ai</p>
                </div>
            </div>
        </div>
    </SectionWrapperContainer>
}

export default CookiePolicy;