import React, {Component} from 'react'

import * as planets from './../../assets/planets/planets'
import * as carousels from './../../assets/carousel/carousel'
import * as banks from './../../assets/banks/banks'

import * as bonusIcons from './../../assets/bonus/icons'

import {connect} from 'react-redux'
import planetStandBlue from '../../assets/planets/planetStandBlue.png'
import planetStandPurple from '../../assets/planets/planetStandPurple.png'
import finalImage from '../../assets/background/finalScreen.png'

import PrintName from './../../UI/printName/printName'

class pageData extends Component {
    static pages = [
        {
            type: 'Info',
            centreContent: false,
            subTitle: 'Hey there… can you help?',
            paragraph: 'I’m Ringo, guardian of the ring-fence. I’m travelling to planet Robos but I’ve lost all my belongings on the way. Can you help me find them and complete my mission?',
            buttonLabel: 'Get Started',
            imageHeight: 0.4,
            bottomImage: planetStandBlue,
        },
        {
            type: 'Name',
            label: 'workArea',
            question: 'Which area do you work in?',
            questionNumber: 'question0',
            subTitle: 'Almost forgot, what should I call you?',
            buttonLabel: 'Continue'
        },
        {
            type: 'Info',
            centreContent: false,
            subTitle: <span> Glad you’re willing to help <PrintName />, ready to start the mission?</span>,
            paragraph: 'By answering the questions you will see me change – and become your own version of me – your own Ringo character. At the end you can share who I’ve become with your colleagues – and send them the link to the game – so they can play too.',
            buttonLabel: 'Click here to begin',
            imageHeight: 0.4,
            bottomImage: planetStandBlue,
        },
        {
            type: 'MissionComplete',
            percent: '14%'
        },


        //////// Question 1 //////////////
        {
            type: 'PickAListQuestion',
            question: 'What is ring-fencing intended to do?',
            questionNumber: 'question1',
            subText: 'Click all that you think apply:',
            label: 'whatRingFence',
            item: 'suitGroup',
            availableItems: ['suit1', 'suit2', 'suit3', 'suit4', 'suit5'],
            questionItems: [
                {label: 'Separate everyday banking services from investment banking services'}, // , funny: true        // if you want to have a funny answer also
                {label: 'Support the UK Government\'s response to the financial crisis'},
                {label: 'It\'s intended to help strengthen the UK financial system'},
                {label: 'It\'s intended to help protect the UK economy'},
                {label: 'It\'s intended to help reduce the risk to one part of the bank from failure in another'},
            ],
            buttonType: 'list', // image
            buttonLabel: 'Continue',
            correctAnswer: [true, true, true, true, true],

        },
        {
            type: 'PickAListQuestion',
            label: 'whatRingFence',
            preWrong: 'Not quite right!',
            isVisible: false,
            current: false,
            selected: 'suit1',
            preRight: 'Correct!',
            answer: 'They all apply',
            buttonLabel: 'Continue',
        },
        {
            type: 'Info',
            label: 'whatRingFence',
            centreContent: true,
            subTitle: 'More info',
            paragraph: 'Ring-fencing legislation means that we\'ve had to make changes to the way our group is structured and how we operate when working with and providing services to customers. The basic rules mean that retail banking services are inside the ring-fence and investment banking services are outside the ring-fence. Some activities, notably banking for larger companies, may be on either side.',
            buttonLabel: 'Continue',
        },
        {
            type: 'Info',
            label: 'whatRingFence',
            centreContent: false,
            subTitle: 'Brilliant, you\'ve found my suit',
            paragraph: 'Gorgeous colour!!',
            buttonLabel: 'Next Question',
            imageHeight: 0.4,
            bottomImage: planetStandBlue,
        },
        //////// Question 2 //////////////
        {
            type: 'PickAListQuestion',
            question: 'When does ring-fencing come into effect?',
            questionNumber: 'question2',
            subText: 'Select the date you think is correct, then confirm:',
            singleSelect: true,
            item: 'hairGroup',
            availableItems: ['hair1', 'hair2', 'hair3', 'hair4', 'hair5'],
            label: 'ringDate',
            questionItems: [

                {label: '24th December 2018'},
                {label: '1st January 2019'},
                {label: '31st August 2021'},
                {label: '5th March 2023'},
                {label: '7th September 2024'}, // , funny: true        // if you want to have a funny answer also

            ],
            buttonType: 'list', // image
            buttonLabel: 'Continue',
            correctAnswer: [false, true, false, false, false]
        },
        {
            type: 'PickAListQuestion',
            label: 'ringDate',
            preWrong: 'Not quite right!',
            preRight: 'Correct!',
            answer: '1st January 2019',
            buttonLabel: 'Continue',
        },
        {
            type: 'Info',
            label: 'ringDate',
            centreContent: false,
            subTitle: 'I love my new hair',
            paragraph: 'I totally rock this look!',
            buttonLabel: 'Continue',
            imageHeight: 0.4,
            bottomImage: planetStandBlue,
        },
        {
            type: 'MissionComplete',
            percent: '30%'
        },
        //////// Question 3 //////////////
        {
            type: 'PickAListQuestion',
            question: 'How many licensed banks within the RBS Group are inside the ring-fence?',
            questionNumber: 'question3',
            subText: 'Click the number of planets you think the number is:',
            label: 'howManyBanks',
            questionItems: [
                {label: '', image: planets.planet1}, // , funny: true if you want to have a funny answer also
                {label: '', image: planets.planet2},
                {label: '', image: planets.planet3},
                {label: '', image: planets.planet4},
                {label: '', image: planets.planet5},
            ],
            buttonType: 'image', // image
            buttonLabel: 'Confirm?',
            correctAnswer: [true, true, true, true, true],
        },
        {
            type: 'PickAListQuestion',
            label: 'howManyBanks',
            preWrong: 'Not quite right!',
            preRight: 'Correct!',
            answer: 'There are 5 licensed banks within the ring-fence, with most of our colleagues sitting within NatWest Bank Plc.',
            buttonLabel: 'Continue',
        },

        // bonus 1 selectAll5 ////////////////////
        {
            type: 'Info',
            bonusLabel: 'bonus1',
            centreContent: false,
            buttonLabel: 'Go',
            subTitle: 'Bonus round',
            paragraph: <span>This is exciting, you can help me unlock one of my treasured items, let's go.<br />We have 20 seconds.</span>,
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },
        {
            bonusQuestion: true,
            centreContent: true,
            icon: bonusIcons.bonus1SVG,
            bonusTime: 20000,
            bonusLabel: 'bonus1',
            question: 'Can you list all 5 banks INSIDE the ring-fence?',
            questionNumber: 'bonus1',
            type: 'PickAListQuestion',
            label: 'selectAll5',
            item: 'headwearGroup',
            availableItems: ['headwear1', 'headwear2', 'headwear3', 'headwear4', 'headwear5'],
            questionItems: [
                {label: 'The Royal Bank of Scotland plc', image: banks.rbs},
                {label: 'Adam & Company', image: banks.adamCompany}, // , funny: true if you want to have a funny answer also
                {label: 'Child & Company', image: banks.childCo},
                {label: 'Ulster Bank Ireland DAC', image: banks.ulster},
                {label: 'National Westminster Bank Plc', image: banks.natwest},


                {label: 'Isle of Man Bank', image: banks.green},
                {label: 'Coutts and Co', image: banks.couttsDependancies},
                {label: 'Holts', image: banks.holts},
                {label: 'Lombard', image: banks.lombard},
                {label: 'Ulster Bank Limited', image: banks.ulster},
            ],
            buttonType: 'image', // image
            buttonLabel: 'Continue?',
            correctAnswer: [true, false, false, true, true, false, true, false, false, true],
        },
        {
            type: 'PickAListQuestion',
            bonusLabel: 'bonus1',
            label: 'selectAll5',
            preWrong: 'Not quite right on that one',
            preRight: 'Yes, that\'s right!',
            answer: 'These are the 5 banks inside the ring-fence',
            buttonLabel: 'More Info',
        },
        {
            type: 'Info',
            label: 'selectAll5',
            bonusLabel: 'bonus1',
            subTitle: 'More info',
            paragraph: <span>The 5 banks inside the ring-fence are:  The Royal Bank of Scotland plc, National Westminster Bank Plc, Coutts and Co, Ulster Bank Ireland DAC and Ulster Bank Limited.<br /><br /><b>Did you know: </b>Adam and Company are not a licensed bank but are in fact a brand? You can find more information on this on the intranet. </span>,
            buttonLabel: 'Continue',
        },
        {
            type: 'BonusItems',
            bonusLabel: 'bonus1',
            locked: 'Sorry, you didn\'t unlock my headwear',
            unlocked: 'Hey, you\'ve unlocked my headwear',
            buttonLabel: 'Continue',
        },
        {
            type: 'Info',
            bonusLabel: 'bonus1',
            centreContent: false,
            buttonLabel: 'Next Question',
            unlocked: 'Oh wow, this looks great on me!',
            locked: 'Ah, never mind, let\'s try for the next thing',
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },

        // Question 4 ///////////// drag drop 
        {
            type: 'Info',
            centreContent: true,
            subTitle: 'Which of the following list of brands sit within our ring-fenced bank and which sit outside?',
            paragraph: 'If you think a brand sits inside the ring-fence, drag up on your screen, and if you think a brand sits outside the ring-fence, drag down',
            buttonLabel: 'Click continue to start playing',
        },
        {
            type: 'Drag',
            label: 'dragDrop',
            question: 'Which brands are inside the ring-fence? (Swipe up or down)',
            questionNumber: 'question4',
            questionItems: [
                {
                    label: 'Group 1', image: planets.planet1, value: 'inside', caption: 'This is inside',
                    group: [
                        'RBS plc',
                        'NatWest Bank Plc',
                        'Ulster Bank'
                    ]
                },
                {
                    label: 'Group 4', image: planets.planet4, value: 'outside', caption: 'This is outside',
                    group: [
                        'NatWest Markets',
                        'RBS International',
                    ]
                },

                {
                    label: 'Group 3', image: planets.planet3, value: 'inside', caption: 'This is inside',
                    group: [
                        'Adam & Company',
                        'Holt\'s',
                        'Drummonds'
                    ]
                },
                {
                    label: 'Group 2', image: planets.planet2, value: 'inside', caption: 'This is inside',
                    group: [
                        'Coutts',
                        'Lombard',
                        'Child & Co'
                    ]
                },
                {
                    label: 'Group 5', image: planets.planet5, value: 'outside', caption: 'This is outside',
                    group: [
                        'Coutts Crown Dependencies',
                        ' Isle of Man Bank'
                    ]
                },

            ],
            buttonType: 'image', // image
            buttonLabel: 'Continue',
            correctAnswer: [true, true, true, true, true],
        },
        {
            type: 'DragAnswer',
            label: 'dragDrop',
            subTitle: 'Nice try',
            preWrong: 'The brands in red previously were not quite right',
            preRight: 'Well done!',
            paragraph: 'These are the brands within the ring-fence: The Royal Bank of Scotland, National Westminster Bank, Ulster Bank, Coutts, Lombard, Child & Co, Adam & Company, Holt\'s, Drummonds',
            buttonLabel: 'Continue',
        },
        {
            type: 'MissionComplete',
            percent: '60%'
        },

        // Question 5 /////////////////////////////////////

        {
            type: 'PickAListQuestion',
            question: 'What changes have our personal customers noticed to their banking services?',
            questionNumber: 'question5',
            subText: 'Click all that you think apply:',
            item: 'eyeGroup',
            availableItems: ['eye1', 'eye2', 'eye3', 'eye4', 'eye5'],
            label: 'customersNotice',
            questionItems: [
                {label: 'New sort code'}, // , funny: true if you want to have a funny answer also
                {label: 'New bank logo on their statements and cheque books'},
                {label: 'Different colleagues dealing with their requests'},
                {label: 'No material changes'}
            ],
            buttonType: 'list', // image
            buttonLabel: 'Am I right?',
            correctAnswer: [false, false, false, true]
        },
        {
            type: 'PickAListQuestion',
            label: 'customersNotice',
            preWrong: 'Not quite right!',
            preRight: 'Correct!',
            buttonLabel: 'More info',
        },
        {
            type: 'Info',
            label: 'customersNotice',
            subTitle: 'More info',
            paragraph: 'The majority of customers have experienced no material changes. There is no change to how personal bank account holders bank with us or the level of service we provide them. We\'re still the same bank they know and are used to dealing with.',
            buttonLabel: 'Continue',
        },
        {
            type: 'Info',
            label: 'customersNotice',
            centreContent: false,
            subTitle: 'Oh nice, you\'ve found my goggles',
            paragraph: 'Hey, I\'m looking good!!',
            buttonLabel: 'Continue',
            imageHeight: 0.4,
            bottomImage: planetStandBlue,
        },
        // Bonus 2 ///////////////////////////////////////////////
        {
            type: 'Info',
            bonusLabel: 'bonus2',
            centreContent: false,
            buttonLabel: 'Go',
            subTitle: 'Bonus round',
            paragraph: 'Aha, you can help me unlock another one of my treasured items, let\'s go',
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },
        {
            bonusQuestion: true,
            bonusLabel: 'bonus2',
            item: 'tailGroup',
            availableItems: ['tail1', 'tail2', 'tail3', 'tail4', 'tail5'],
            icon: bonusIcons.bonus2SVG,
            bonusTime: 10000,
            type: 'YesNoQuestion',
            label: 'canCollaborate',
            question: 'Can people in Personal Banking collaborate with colleagues in NatWest Markets?',
            questionNumber: 'bonus2',
            correctAnswer: [true],
            subText: 'Select yes or no to continue',
            questionItems: [
                {label: 'Yes', value: true},
                {label: 'No', value: false},
            ],
        },
        {
            bonusLabel: 'bonus2',
            type: 'YesNoQuestion',
            label: 'canCollaborate',
            preWrong: 'Not quite right on that one',
            preRight: 'Yes, that\'s right!',
            buttonLabel: 'More info',
        },
        {
            type: 'Info',
            label: 'canCollaborate',
            bonusLabel: 'bonus2',
            subTitle: 'More info',
            paragraph: 'Yes, they can, but probably won’t need to do so very often. An example of collaboration is when a Personal Banking employee may need to speak with a colleague in NatWest Markets if the Personal customer wants to carry out a Spot FX trade - this is possible as we’re still one RBS, one team.',
            buttonLabel: 'Continue',
        },
        {
            type: 'BonusItems',
            bonusLabel: 'bonus2',
            buttonLabel: 'Continue',
            locked: 'Sorry, you didn\'t unlock my tail',
            unlocked: 'Great, you\'ve unlocked my tail',
        },
        {
            type: 'Info',
            bonusLabel: 'bonus2',
            centreContent: false,
            buttonLabel: 'Next Question',
            unlocked: 'Oh yeah, I look awesome',
            locked: 'Ah, never mind, let\'s try the next thing',
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },

        // Questoion 6 ////////////////////////////////////////////////////////                                         

        {
            type: 'PickAListQuestion',
            question: 'How have our ring-fencing plans been different to our competitors\'?',
            questionNumber: 'question6',
            subText: 'Click arrows or swipe carousel to select',
            item: 'shoeGroup',
            availableItems: ['shoe1', 'shoe2', 'shoe3', 'shoe4', 'shoe5'],
            label: 'spotDifference',
            questionItems: [
                {label: 'No difference', image: carousels.carousel1}, // , funny: true if you want to have a funny answer also
                {label: 'Some differences', image: carousels.carousel2},
                {label: 'It has all been different ', image: carousels.carousel3},
            ],
            buttonType: 'carousel', // image
            buttonLabel: 'Confirm',
            correctAnswer: [false, true, false]
        },
        {
            type: 'PickAListQuestion',
            label: 'spotDifference',
            preWrong: 'Not quite right on that one',
            preRight: 'Yes, that\'s right!',
            answer: 'There have been some differences because of our business model. The way in which individual banks have carried out ring-fencing has depended on the type of business conducted by those banks, including the business mix between retail and other banking activities, and their structure. Most of our customers have experienced no material changes, and for those who have, we kept them updated along the way.',
            buttonLabel: 'Continue',
        },
        {
            type: 'Info',
            label: 'spotDifference',
            itemLabel: 'shoes',
            centreContent: false,
            subTitle: 'Oooh, you\'ve found my shoes',
            paragraph: 'I\'ll be taking these out for a spin tonight!!',
            buttonLabel: 'Next Question',
            imageHeight: 0.4,
            bottomImage: planetStandBlue,
        },

        // Questoion 7 ////////////////////////////////////////////////////////

        {
            type: 'YesNoQuestion',
            label: 'workDifferent',
            questionNumber: 'question7',
            question: 'Does ring-fencing mean that we\'ll work differently?',
            correctAnswer: [true],
            subText: 'Select yes or no to continue',
            questionItems: [
                {label: 'Yes', value: true},
                {label: 'No', value: false},
            ],
        },
        {
            type: 'Info',
            label: 'workDifferent',
            centreContent: true,
            subTitle: 'Oooops, trick question. The answer is yes and no.',
            paragraph: 'We\'re all still part of RBS Group and there\'s no changes to our ambition. However, there have been some administrative changes we needed to make to meet ring-fencing requirements. For example, we changed our internal operations, systems and processes to comply with ring-fencing rules.',
            buttonLabel: 'Continue',
        },
        {
            type: 'MissionComplete',
            percent: '70%'
        },

        // Question 8 /////////////////////////////////////

        {
            type: 'PickAListQuestion',
            question: 'Does ring-fencing mean that contracts of employment have changed in any way? ',
            questionNumber: 'question8',
            subText: 'Click all that you think apply:',
            item: 'patternGroup',   
            availableItems: ['pattern1', 'pattern2', 'pattern3', 'pattern4', 'pattern5'],
            label: 'contractsChange',
            questionItems: [
                {label: 'Terms and conditions'}, // , funny: true if you want to have a funny answer also
                {label: 'RBS brand on payslips'},
                {label: 'Employer legal entity'},
                {label: 'Pay and benefits'},
                {label: 'No changes'},
            ],
            buttonType: 'list', // image
            buttonLabel: 'Confirm',
            correctAnswer: [false, false, true, false, false]
        },
        {
            type: 'PickAListQuestion',
            label: 'contractsChange',
            preWrong: 'Not quite right!',
            preRight: 'Correct!',
            buttonLabel: 'More info',
        },
        {
            type: 'Info',
            label: 'contractsChange',
            subTitle: 'More info',
            paragraph: 'The only changes have been to what\'s called the employer legal entity (i.e. the entity that holds the employee contract). Although for some colleagues, their employer legal entity has not changed at all. If your employer legal entity has changed, you will have received a message in January 2018 confirming what this means for you.  In the new structure, the NatWest Bank Plc legal entity is the main operating company within the ring-fenced group. Conditions of employment, including pay and benefits stay the same. And you\'ll still see the RBS brand on payslips and other communications.',
            buttonLabel: 'Continue',
        },
        {
            type: 'Info',
            label: 'contractsChange',
            centreContent: false,
            subTitle: 'Amazing! how cool do I look now?',
            paragraph: 'I feel so fab!!',
            buttonLabel: 'Next Question',
            imageHeight: 0.4,
            bottomImage: planetStandBlue,
        },

        // Question 9 ////////////////////////////////////////////////////////

        {
            type: 'YesNoQuestion',
            label: 'canColleagues',
            questionNumber: 'question9',
            question: 'Can colleagues who work within the ring-fenced bank provide services to the non-ring-fenced bank?',
            correctAnswer: [true],
            subText: 'Select yes or no to continue',
            questionItems: [
                {label: 'Yes', value: true},
                {label: 'No', value: false},
            ],
        },
        {
            type: 'YesNoQuestion',
            label: 'canColleagues',
            preWrong: 'Not quite right on that one',
            preRight: 'Yes, that\'s right!',
            buttonLabel: 'More info',
        },
        {
            type: 'Info',
            centreContent: true,
            subTitle: 'More info',
            paragraph: 'The rules of ring-fencing say that, if you\'re in the ring-fence, it’s ok to provide services to colleagues on both sides of the ring-fence. But it’s a one-way thing – NatWest Markets (for example) can’t provide services to colleagues who are inside the ring-fenced bank. ',
            buttonLabel: 'Continue',
        },
        //////// Bonus 3 //////////////
        {
            type: 'Info',
            bonusLabel: 'bonus3',
            centreContent: false,
            buttonLabel: 'Go',
            subTitle: 'Bonus round',
            paragraph: 'You\'ve got a chance to unlock a lovely new gift for me, let\'s go',
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },
        {
            type: 'PickAListQuestion',
            bonusQuestion: true,
            icon: bonusIcons.bonus3SVG,
            bonusTime: 10000,
            bonusLabel: 'bonus3',
            item: 'neckGroup',
            availableItems: ['neck1', 'neck2', 'neck3', 'neck4', 'neck5'],
            question: 'How will Risk work with colleagues inside and outside the ring-fence?',
            questionNumber: 'bonus3',
            subText: 'Click all that you think apply:',
            label: 'riskWork',
            questionItems: [
                {label: 'Risk will just work inside the ring-fence'}, // , funny: true        // if you want to have a funny answer also
                {label: 'Risk will work across both areas'},
                {label: 'Risk will just work outside the ring fence'}
            ],
            buttonType: 'list', // image
            buttonLabel: 'Confirm',
            correctAnswer: [false, true, false]
        },
        {
            bonusLabel: 'bonus3',
            type: 'PickAListQuestion',
            label: 'riskWork',
            preWrong: 'Not quite right!',
            preRight: 'Correct!',
            buttonLabel: 'More info',
        },
        {
            type: 'Info',
            bonusLabel: 'bonus3',
            centreContent: true,
            subTitle: 'More info',
            paragraph: 'Risk has teams that work inside the ring-fence and outside the ring-fence, working collaboratively to provide advice and guidance across the ring-fence for a bank-wide, holistic view for businesses to make informed decisions',
            buttonLabel: 'Continue',
        },
        {
            type: 'BonusItems',
            bonusLabel: 'bonus3',
            locked: 'Sorry, you didn\'t unlock your special item',
            unlocked: 'Hey, you\'ve unlocked your special item',
            buttonLabel: 'Continue'
        },
        {
            type: 'Info',
            bonusLabel: 'bonus3',
            centreContent: false,
            buttonLabel: 'Next Question',
            unlocked: 'I love my new gift',
            locked: 'Ah, never mind, let\'s go for the next item.',
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },
        {
            type: 'MissionComplete',
            percent: '80%'
        },
        // Questoion 10 ////////////////////////////////////////////////////////

        {
            type: 'YesNoQuestion',
            label: 'marketTraders',
            question: 'Can a NatWest Markets trader collaborate with colleagues in Commercial & Private Banking (CPB) to deliver a service to customers?',
            questionNumber: 'question10',
            correctAnswer: [true],
            subText: 'Select yes or no to continue',
            questionItems: [
                {label: 'Yes', value: true},
                {label: 'No', value: false},
            ],
        },
        {
            type: 'YesNoQuestion',
            label: 'marketTraders',
            preWrong: 'Not quite right on that one',
            preRight: 'Yes, that\'s right!',
            buttonLabel: 'More info',
        },
        {
            type: 'Info',
            label: 'marketTraders',
            centreContent: true,
            subTitle: 'More info',
            paragraph: 'NatWest Markets employees who support customers needing products and services that sit inside the ring-fence work with colleagues in CPB to help them access these. The same would apply if customers need products and services that are available both from inside and outside the ring-fence. For example, 1) a NatWest Markets trader can offer Derivatives or FX Options to a CPB customer after referral from a CPB Relationship Manager or, 2) NatWest Markets can introduce a Banking or Insurance sector customer to CPB to support the customer\'s day to day payment needs.',
            buttonLabel: 'Continue',
        },

        // Question 11 /////////////////////////////////////

        {
            type: 'PickAListQuestion',
            question: 'How does ring-fencing affect Commercial & Private Banking (CPB) customers?',
            questionNumber: 'question11',
            subText: 'Click all that you think apply:',
            label: 'affectCPB',
            questionItems: [
                {label: 'No changes'}, // , funny: true if you want to have a funny answer also
                {label: 'A change to the brand they see on literature'},
                {label: 'Some changes dependant on the products and services they need'},
                {label: 'Everything has changed'}
            ],
            buttonType: 'list', // image
            buttonLabel: 'Confirm',
            correctAnswer: [false, false, true, false]
        },
        {
            type: 'PickAListQuestion',
            label: 'affectCPB',
            preWrong: 'Not quite right!',
            preRight: 'Correct!',
            buttonLabel: 'More info',
        },
        {
            type: 'Info',
            label: 'affectCPB',
            subTitle: 'More info',
            paragraph: 'Some customers receive certain products or services from NatWest Markets Plc or RBS International, but their main relationship will stay with CPB. For example, Structured Deposits can be offered by NatWest Markets to a CPB customer or prohibited lending may be provided by RBS International after referral from a CPB Relationship Manager and following the standard on-boarding assessment process. Access to products may also change, for example, a Relevant Financial Institution (RFI) customer in CPB who wants a credit card can only have a charge card with the balance repayable within 7 days.',
            buttonLabel: 'Continue',
        },
        // {
        //     type: 'Info',
        //     label: 'affectCPB',
        //     centreContent: false,
        //     subTitle: 'Congratulations, you\'ve landed in your new destination',
        //     paragraph: 'Hey, I love this new place !!',
        //     buttonLabel: 'Continue',
        //     imageHeight: 0.4,
        //     bottomImage: planetStandBlue,
        // },
        {
            type: 'MissionComplete',
            percent: '90%'
        },

        // Bonus 4 ///////////////////////////////////////////////
        {
            type: 'Info',
            bonusLabel: 'bonus4',
            centreContent: false,
            buttonLabel: 'Go',
            subTitle: 'Bonus round',
            paragraph: 'I\'ve lost my best buddy, help me find him!! You\'ve got eight seconds to answer.',
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },
        {
            bonusQuestion: true,
            bonusLabel: 'bonus4',
            icon: bonusIcons.bonus4SVG,
            bonusTime: 8000,
            item: 'petGroup',
            availableItems: ['pet1', 'pet2', 'pet3', 'pet4', 'pet5'],
            type: 'YesNoQuestion',
            label: 'supportFunction',
            question: 'If you work within a support function, like HR, Finance or Legal, can you work across the ring-fence?',
            questionNumber: 'bonus4',
            correctAnswer: [true],
            subText: 'Select yes or no to continue',
            questionItems: [
                {label: 'Yes', value: true},
                {label: 'No', value: false},
            ],
        },
        {
            type: 'YesNoQuestion',
            bonusLabel: 'bonus4',
            label: 'supportFunction',
            preWrong: 'Not quite right on that one',
            preRight: 'Yes, that\'s right!',
            buttonLabel: 'More info',
        },
        {
            bonusLabel: 'bonus4',
            type: 'Info',
            label: 'supportFunction',
            subTitle: 'More info',
            paragraph: 'Colleagues in Services and Function teams provide some shared services to the whole bank, meaning that, even though employed by NatWest Bank Plc, they can work with colleagues on both sides of the ring-fence. Intra-group agreements are in place to formally document these arrangements.',
            buttonLabel: 'Continue',
        },
        {
            type: 'BonusItems',
            bonusLabel: 'bonus4',
            locked: 'Sorry, you didn\'t find my best buddy',
            unlocked: 'Hey, you\'ve found my best buddy',
            buttonLabel: 'Continue'
        },
        {
            type: 'Info',
            bonusLabel: 'bonus4',
            centreContent: false,
            buttonLabel: 'Continue',
            unlocked: 'Nice, I got my best buddy back',
            locked: 'Oh no, I\'m sure we\'ll find my best buddy soon',
            imageHeight: 0.4,
            bottomImage: planetStandPurple,
        },
        {
            type: 'Info',
            send: true,
            centreContent: false,
            buttonLabel: 'Continue',
            subTitle: <span> Thank you <PrintName />, We are all one RBS – one team.</span>,
            imageHeight: 0.4,
            fullScreenImage: finalImage
        },
        {
            type: 'Share',
            centreContent: false,
            buttonLabel: 'Download your Ringo character',
            imageHeight: 0.4,
            subTitle: 'You are looking good',
            paragraph: <React.Fragment>
                <li>Why not share your character and the link to the game with your colleagues. It’s easy to do – you can either do it via Workplace or just send an email. </li>
                <li>Please refer to the ‘add photo/ video’ instructions on Workplace to share. </li>
                <li>And visit the Ring-fencing intranet pages for more information.</li>
            </React.Fragment>,
            bottomImage: planetStandPurple,
        },

    ]
    render () {
        return null
    }
}

const mapStateToProps = state => { // map redux state to class props
    return {
        nickname: state.nickname
    }
}

export default connect( mapStateToProps )( pageData )
