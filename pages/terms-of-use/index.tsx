import HeadingWrapper from "@/components/ui/HOC/HeadingWrapper";
import SectionWrapperContainer from "@/components/ui/HOC/SectionWrapperContainer";

const DUMMY_COC = [
    {
        one: 'Intro',
        two: ['Welcome to WeTalkDATA&AI’s website. By using our site, you are agreeing to comply with and be bound by the following terms of use. Please review the following terms carefully. If you do not agree to these terms, you should not use this site. ']
    },
    {
        one: '1. Acceptance of Agreement ',
        two: 'You agree to the terms and conditions outlined in this Terms of Use Agreement (“Agreement”) ' +
            'with respect to our site (the “Site”). This Agreement constitutes the entire and only agreement ' +
            'between us and you, and supersedes all prior or contemporaneous agreements, representations,' +
            ' warranties and understandings with respect to the Site, the content, products or services provided by ' +
            'or through the Site, and the subject matter of this Agreement. This Agreement may be amended at any time by us ' +
            'from time to time without specific notice to you. The latest Agreement will be posted on the Site,' +
            ' and you should review this Agreement prior to using the Site.'
    }, {
        one: '2. Copyright ',
        two: 'The content, organization, graphics, design, audio, animation, video, compilation, magnetic translation, ' +
            'digital conversion and other matters related to the Site are protected under\n' +
            'applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.' +
            ' The copying, redistribution, use or publication by you of any such matters or any part of the Site, except as allowed' +
            ' by Section 4, is strictly prohibited. You do not acquire ownership rights to any content, document or other materials viewed through the Site. ' +
            'The posting of information or materials on the Site does not constitute a waiver of any right in such information and materials. '
    }, {
        one: '3. Trademarks ',
        two: 'WeTalkDATA&AI is the trademark or registered trademark of WeTalkDATA&AI in the Republic of North Macedonia and/or other countries.' +
            ' All other trademarks and registered trademarks are the property of their respective owners. \n'
    }, {
        one: '5. Editing, Deleting and Modification ',
        two: 'Unless otherwise specified, the viewing, printing or downloading of any content, graphic, ' +
            'form or document from the Site grants you only a limited, nonexclusive license for use solely by you ' +
            'for your own personal use and not for republication, distribution, assignment, sublicense, sale, ' +
            'preparation of derivative works or other use. No part of any content, form or document may be reproduced in any form or incorporated' +
            ' into any information retrieval system, electronic or mechanical, other than for your personal use (but not for resale or redistribution).' +
            ' Unless otherwise specified, the developer tools and components, download areas, communication forums and product information (collectively "Services")' +
            ' are for your personal and non-commercial use. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish,' +
            'license, create derivative works from, transfer, or sell any information, software, products or services obtained from the Services. '
    }, {
        one: '4. Limited Right to Use ',
        two: 'We reserve the right in our sole discretion to edit or delete any documents,' +
            ' information or other content appearing on the Site.'
    }, {
        one: '6. Indemnification ',
        two: 'You agree to indemnify, defend and hold us and our partners, attorneys, staff and affiliates ' +
            '(collectively, “Affiliated Parties”) harmless from any liability, loss, claim and expense,' +
            ' including reasonable attorney’s fees, related to your violation of this Agreement or use of the Site. \n'
    }, {
        one: '7. Nontransferable ',
        two: 'Your right to use the Site is not transferable.' +
            ' Any password or right given to you to obtain information or documents is not transferable.'
    }, {
        one: '8. Disclaimer and Limits ',
        two: 'THE INFORMATION FROM OR THROUGH THE SITE ARE PROVIDED “AS-IS,” “AS AVAILABLE,” AND ALL WARRANTIES, EXPRESS OR IMPLIED,' +
            ' ARE DISCLAIMED (INCLUDING BUT NOT LIMITED TO THE DISCLAIMER OF ANY IMPLIED WARRANTIES OF MERCHANTABILITY AND ' +
            'FITNESS FOR A PARTICULAR PURPOSE). THE INFORMATION AND SERVICES MAY CONTAIN BUGS, ERRORS, PROBLEMS OR OTHER LIMITATIONS.' +
            ' WE AND OUR AFFILIATED PARTIES HAVE NO LIABILITY WHATSOEVER FOR YOUR USE OF ANY INFORMATION OR SERVICE. IN PARTICULAR,' +
            ' BUT NOT AS A LIMITATION THEREOF, WE AND OUR AFFILIATED PARTIES ARE NOT LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR' +
            ' CONSEQUENTIAL DAMAGES (INCLUDING DAMAGES FOR LOSS OF BUSINESS, LOSS OF PROFITS, LITIGATION, OR THE LIKE), WHETHER BASED ON' +
            ' BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, ' +
            'EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE NEGATION OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS' +
            ' OF THE BARGAIN BETWEEN US AND YOU. THIS SITE AND THE INFORMATION WOULD NOT BE PROVIDED WITHOUT SUCH LIMITATIONS.' +
            ' NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US THROUGH THE SITE SHALL CREATE ANY WARRANTY,' +
            ' REPRESENTATION OR GUARANTEE NOT EXPRESSLY STATED IN THIS AGREEMENT. ALL RESPONSIBILITY OR LIABILITY FOR ANY DAMAGES CAUSED BY VIRUSES' +
            ' CONTAINED WITHIN THE ELECTRONIC FILE CONTAINING THE FORM OR DOCUMENT IS DISCLAIMED. WE WILL NOT BE LIABLE TO YOU FOR ANY INCIDENTAL,' +
            ' SPECIAL OR CONSEQUENTIAL DAMAGES OF ANY KIND THAT MAY RESULT FROM USE OF OR INABILITY TO USE OUR SITE. ' +
            'OUR MAXIMUM LIABILITY TO YOU UNDER ALL CIRCUMSTANCES WILL BE EQUAL TO THE PURCHASE PRICE YOU PAY FOR ANY GOODS, SERVICES OR INFORMATION. '
    }, {
        one: '9. Use of Information',
        two: 'We reserve the right, and you authorize us, to the use and assignment of all information ' +
            'regarding Site uses by you and all information provided by you in any manner consistent with our Privacy Policy. '
    }, {
        one: '10. Privacy Policy ',
        two: 'Our Privacy Policy, as it may change from time to time, is a part of this Agreement.  '
    }, {
        one: '11. Links to other Web Sites ',
        two: 'The Site contains links to other Web sites. We are not responsible for the content,' +
            ' accuracy or opinions express in such Web sites, and such Web sites are not investigated,' +
            ' monitored or checked for accuracy or completeness by us. Inclusion of any linked Web site on our Site does not imply approval' +
            ' or endorsement of the linked Web site by us.' +
            ' If you decide to leave our Site and access these third-party sites, you do so at your own risk.'
    },
];

const cocList = DUMMY_COC.map((code, i) => {
    return <div key={i} className='text-left py-4'>
        <h1 className='text-white font-extrabold 2xl:text-4xl xl:text-3xl text-xl lg:text-2xl'>
            {code.one}
        </h1>
        <p className='text-[#ffd700] py-1 paragraph-1'>
            {code.two}
        </p>
    </div>
});

const TermsAndConditions = () => {
    return <SectionWrapperContainer>
        <figure className='inner-wrapper-container'>
            <HeadingWrapper>TERMS OF USE</HeadingWrapper>
            <div>{cocList}</div>
        </figure>
    </SectionWrapperContainer>
}

export default TermsAndConditions;