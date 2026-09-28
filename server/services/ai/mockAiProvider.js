import { AiProvider } from './aiProvider.js';

export class MockAiProvider extends AiProvider {
  async analyzeLegalProblem(query) {
    // Artificial small delay (300ms) to simulate async pipeline realistically
    await new Promise(resolve => setTimeout(resolve, 300));

    const q = (query || '').toLowerCase().trim();

    // Scenario 1: Instagram / Social Media Account Hacking & Online Threats
    if (q.includes('instagram') || q.includes('hacked') || (q.includes('threat') && (q.includes('online') || q.includes('account') || q.includes('photo')))) {
      return {
        query,
        isMock: true,
        problemAnalysis: {
          category: 'Cyber Crime',
          subcategory: 'Account Compromise & Online Threats',
          issues: [
            'Unauthorized account intrusion & identity compromise',
            'Digital intimidation / blackmail via electronic messaging',
            'Need for electronic chain of custody & prompt preservation of digital proof'
          ],
          summary: 'The described scenario involves unauthorized takeover of a social media profile coupled with electronic intimidation or blackmail, implicating both Information Technology and penal statutory frameworks.'
        },
        relevantLaws: [
          {
            act: 'BNS (2023)',
            section: '351',
            title: 'Criminal Intimidation',
            relevance: 'Potentially relevant if the unauthorized user or perpetrator communicates threats of injury to person, reputation, or character to cause alarm.',
            punishment: 'Up to 2 years imprisonment or fine; up to 7 years if threat involves grievous harm or character defamation.',
            classification: 'Bailable / Non-Cognizable (Aggravated forms cognizable)',
            source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
          },
          {
            act: 'IT Act (2000)',
            section: '66',
            title: 'Computer Related Offences (Hacking)',
            relevance: 'Applies to unauthorized access, password interception, or taking control over an electronic account without lawful authorization.',
            punishment: 'Imprisonment up to 3 years or fine up to ₹5,00,000, or both.',
            classification: 'Cognizable / Bailable',
            source: 'MOCK — Information Technology Act, 2000'
          },
          {
            act: 'IT Act (2000)',
            section: '66C',
            title: 'Identity Theft & Credential Misuse',
            relevance: 'Directly addresses fraudulent use of another person’s unique credentials, login passwords, or electronic profiles.',
            punishment: 'Imprisonment up to 3 years and fine up to ₹1,00,000.',
            classification: 'Cognizable / Bailable',
            source: 'MOCK — Information Technology Act, 2000'
          },
          {
            act: 'BSA (2023)',
            section: '61 & 63',
            title: 'Electronic Record Admissibility & Certificate',
            relevance: 'Governs evidentiary validity and procedural certificate norms for DM logs, email alerts, and screenshot printouts.',
            punishment: 'Evidentiary / Procedural Rule',
            classification: 'Admissibility Standard',
            source: 'MOCK — Bharatiya Sakshya Adhiniyam, 2023'
          }
        ],
        evidence: [
          { id: 'ev-1', title: 'Timestamped DM & Threat Screenshots', description: 'Capture full screens showing sender username, exact handle, message text, and device timestamp.' },
          { id: 'ev-2', title: 'Account Takeover Security Alerts', description: 'Preserve email notifications from Instagram/Meta showing password reset or unrecognised device login.' },
          { id: 'ev-3', title: 'Original Profile URL & Impersonator URL', description: 'Record the exact permanent web URLs of both your compromised profile and any dummy profile used.' },
          { id: 'ev-4', title: 'Device & IP Access Logs', description: 'Download data archive from platform settings if partial access is still available.' }
        ],
        nextSteps: [
          {
            stepNumber: 1,
            title: 'Initiate Account Recovery & Revoke Sessions',
            description: 'Use the official platform recovery flow (instagram.com/hacked) to freeze further unauthorized broadcasts.',
            actionType: 'Technical Defense'
          },
          {
            stepNumber: 2,
            title: 'Preserve Complete Unedited Digital Evidence',
            description: 'Do not delete chat threads or crop screenshots. Maintain originals on an external drive or cloud storage.',
            actionType: 'Evidence Safeguarding'
          },
          {
            stepNumber: 3,
            title: 'Report Incident on National Cyber Crime Portal',
            description: 'Register a complaint at cybercrime.gov.in or dial National Cyber Helpline 1930 immediately.',
            actionType: 'Official Reporting',
            contactInfo: 'Helpline: 1930 | Portal: https://cybercrime.gov.in'
          },
          {
            stepNumber: 4,
            title: 'File e-FIR or Approach Local Cyber Crime Police Station',
            description: 'Provide the cyber complaint acknowledgement number, digital certificate under BSA Sec 63, and evidence packet.',
            actionType: 'Formal Legal Procedure'
          }
        ],
        similarCases: [
          {
            caseName: 'State of Maharashtra v. Mohd. Afzal',
            court: 'Bombay High Court',
            year: 2023,
            legalIssue: 'Simultaneous penal intimidation and IT Act Section 66/66C applicability in social media account takeover.',
            summary: 'The accused gained unauthorized access to private social profiles and issued threats demanding money.',
            courtReasoning: 'Held that unauthorized takeover coupled with threats warrants cumulative charging under penal provisions and the IT Act.',
            outcome: 'Criminal proceedings upheld; bail denied due to digital tampering risk.',
            source: 'MOCK — 2023 CriLJ 1420 (Bom HC)'
          },
          {
            caseName: 'Shreya Singhal v. Union of India',
            court: 'Supreme Court of India',
            year: 2015,
            legalIssue: 'Standards for actionable digital communication offences and targeted cyber intimidation.',
            summary: 'Clarified intermediary responsibilities and investigative thresholds for digital threats.',
            courtReasoning: 'Specific and targeted threats causing alarm fall squarely within lawful criminal investigation frameworks.',
            outcome: 'Affirmed protective guidelines for cyber threat victims.',
            source: 'MOCK — (2015) 5 SCC 1'
          }
        ],
        sources: [
          { act: 'BNS 2023', section: 'Section 351', document: 'Bharatiya Nyaya Sanhita', type: 'Legislation (Mock Record)' },
          { act: 'IT Act 2000', section: 'Section 66 & 66C', document: 'Information Technology Act', type: 'Special Legislation (Mock Record)' },
          { act: 'BSA 2023', section: 'Section 61 & 63', document: 'Bharatiya Sakshya Adhiniyam', type: 'Evidence Law (Mock Record)' }
        ],
        disclaimer: 'DISCLAIMER: This analysis is for educational and informational purposes only based on mock legal datasets. It does not constitute formal legal counsel. Please consult a qualified advocate or cyber cell authority for actionable representation.'
      };
    }

    // Scenario 2: UPI / Financial Cyber Scam / QR Code Fraud
    if (q.includes('upi') || q.includes('scam') || q.includes('fraud') || q.includes('qr code') || q.includes('phishing') || q.includes('money')) {
      return {
        query,
        isMock: true,
        problemAnalysis: {
          category: 'Financial / Cyber Fraud',
          subcategory: 'UPI Payment Deception & Cheating by Impersonation',
          issues: [
            'Fraudulent financial inducement via digital transaction mechanism',
            'Cheating by personation using telecommunication/computer resources',
            'Urgent necessity for banking freeze under procedural rules (BNSS 107)'
          ],
          summary: 'The grievance points to financial fraud executed through digital payment deception, implicating penal cheating provisions, cyber impersonation laws, and immediate banking lien procedures.'
        },
        relevantLaws: [
          {
            act: 'BNS (2023)',
            section: '318(4)',
            title: 'Cheating and Dishonestly Inducing Delivery of Property',
            relevance: 'Applies when a perpetrator deceives the victim to scan a reverse QR code or approve a UPI collect request under false assurances.',
            punishment: 'Imprisonment up to 7 years and fine.',
            classification: 'Cognizable / Non-Bailable',
            source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
          },
          {
            act: 'IT Act (2000)',
            section: '66D',
            title: 'Cheating by Personation Using Computer Resource',
            relevance: 'Covers impersonating bank officials, support executives, or online buyers over digital communication channels.',
            punishment: 'Imprisonment up to 3 years and fine up to ₹1,00,000.',
            classification: 'Cognizable / Bailable',
            source: 'MOCK — Information Technology Act, 2000'
          },
          {
            act: 'BNSS (2023)',
            section: '107',
            title: 'Attachment & Freezing of Proceeds of Crime',
            relevance: 'Enables law enforcement and magistrates to immediately order destination bank accounts/wallets frozen to preserve stolen funds.',
            punishment: 'Procedural Recovery Power',
            classification: 'Asset Lien Standard',
            source: 'MOCK — Bharatiya Nagarik Suraksha Sanhita, 2023'
          }
        ],
        evidence: [
          { id: 'ev-1', title: 'UPI Reference / UTR Number & Bank SMS', description: 'Locate 12-digit UTR number from bank statement or transaction confirmation receipt.' },
          { id: 'ev-2', title: 'Beneficiary UPI ID & Account Details', description: 'Record the receiver VPA/UPI handle, merchant name, and bank account shown in the payment app.' },
          { id: 'ev-3', title: 'Call Records / Chat Messages with Scammer', description: 'Capture incoming phone numbers, WhatsApp communications, fake invoice links, or QR images.' },
          { id: 'ev-4', title: 'Bank Account Passbook / Statement', description: 'Certified PDF bank statement indicating the exact time and debit deduction.' }
        ],
        nextSteps: [
          {
            stepNumber: 1,
            title: 'Call 1930 Cyber Fraud Helpline within Golden Hour',
            description: 'Immediate reporting within 1–2 hours allows the National Cyber Crime Reporting Portal to trigger inter-bank auto-hold on the beneficiary wallet.',
            actionType: 'Emergency Triage',
            contactInfo: 'Toll-Free National Helpline: 1930'
          },
          {
            stepNumber: 2,
            title: 'Alert Your Bank & Block Compromised UPI / Cards',
            description: 'Notify your bank grievance manager to flag the transaction as unauthorized dispute and freeze your UPI handle if PIN was exposed.',
            actionType: 'Financial Safeguard'
          },
          {
            stepNumber: 3,
            title: 'Lodge Formal Incident Report on cybercrime.gov.in',
            description: 'Submit an online complaint under Financial Fraud category with UTR numbers, account details, and payment receipts.',
            actionType: 'Statutory Reporting'
          },
          {
            stepNumber: 4,
            title: 'Obtain Acknowledgement & Follow Up for Account Freeze',
            description: 'Submit the formal complaint copy to your home bank branch manager for insurance/chargeback claim processing.',
            actionType: 'Recovery Follow-up'
          }
        ],
        similarCases: [
          {
            caseName: 'Ramesh Kumar v. State of NCT of Delhi',
            court: 'Delhi High Court',
            year: 2024,
            legalIssue: 'Application of Section 318 BNS / 420 IPC and Section 66D IT Act in QR code payment scam.',
            summary: 'Complainant was induced to scan a QR code under pretext of receiving payment for online marketplace items.',
            courtReasoning: 'Deceptive inducement via digital payment channels fulfills ingredients of penal cheating and cyber personation.',
            outcome: 'Interim freezing of scammer destination accounts upheld.',
            source: 'MOCK — 2024 DHC 2189'
          }
        ],
        sources: [
          { act: 'BNS 2023', section: 'Section 318(4)', document: 'Bharatiya Nyaya Sanhita', type: 'Legislation (Mock Record)' },
          { act: 'IT Act 2000', section: 'Section 66D', document: 'Information Technology Act', type: 'Special Legislation (Mock Record)' },
          { act: 'BNSS 2023', section: 'Section 107', document: 'Bharatiya Nagarik Suraksha Sanhita', type: 'Procedural Law (Mock Record)' }
        ],
        disclaimer: 'DISCLAIMER: This analysis is for educational and informational purposes only based on mock legal datasets. It does not constitute formal legal advice. Promptly contact 1930 and your bank for financial fraud recovery.'
      };
    }

    // Scenario 3: Online Stalking, Harassment & Repeated Threats
    if (q.includes('stalking') || q.includes('harassment') || q.includes('repeatedly') || (q.includes('threat') && !q.includes('instagram'))) {
      return {
        query,
        isMock: true,
        problemAnalysis: {
          category: 'Personal Safety & Cyber Offenses',
          subcategory: 'Electronic Stalking & Criminal Harassment',
          issues: [
            'Repeated unwanted electronic communication despite refusal',
            'Surveillance or monitoring of victim’s internet/digital communications',
            'Intimidation causing apprehension of safety'
          ],
          summary: 'The query indicates continuous unwanted pursuit or surveillance through electronic means, which invokes specific protective provisions under criminal and cyber law.'
        },
        relevantLaws: [
          {
            act: 'BNS (2023)',
            section: '78',
            title: 'Stalking',
            relevance: 'Applies to any person monitoring the internet, email, or electronic communication of a victim or attempting repeated contact after clear disinterest.',
            punishment: 'Up to 3 years imprisonment and fine (first conviction); up to 5 years (repeat conviction).',
            classification: 'Cognizable / Bailable (1st offense)',
            source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
          },
          {
            act: 'BNS (2023)',
            section: '351',
            title: 'Criminal Intimidation',
            relevance: 'Applies when threatening language, ultimatums, or coercive demands are made to cause alarm.',
            punishment: 'Up to 2 to 7 years imprisonment depending on severity.',
            classification: 'Bailable / Cognizable (aggravated)',
            source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
          },
          {
            act: 'BNSS (2023)',
            section: '173',
            title: 'Registration of FIR / Zero FIR',
            relevance: 'Mandates registration of complaint by police regardless of territorial boundary for cognizable offenses.',
            punishment: 'Procedural Mandate',
            classification: 'Reporting Procedure',
            source: 'MOCK — Bharatiya Nagarik Suraksha Sanhita, 2023'
          }
        ],
        evidence: [
          { id: 'ev-1', title: 'Complete Chat History & Timestamps', description: 'Export full conversation archives showing dates, repeated messages, and explicit refusal notices.' },
          { id: 'ev-2', title: 'Call Logs & Voicemails', description: 'Screen recordings or telecom call logs showing frequency and timing of incoming calls.' },
          { id: 'ev-3', title: 'Social Handles & Alternate Accounts', description: 'List of all handles, burner numbers, or email addresses used by the perpetrator.' }
        ],
        nextSteps: [
          {
            stepNumber: 1,
            title: 'Send a Single Clear Refusal & Cease Engagement',
            description: 'Maintain a single documented record explicitly stating that communication is unwanted and must cease immediately.',
            actionType: 'Evidence Establishment'
          },
          {
            stepNumber: 2,
            title: 'Block and Preserve Evidence in Unaltered State',
            description: 'Do not delete the offending accounts or conversations before backing them up safely.',
            actionType: 'Safety & Evidence'
          },
          {
            stepNumber: 3,
            title: 'Report to Women Helpline (1091 / 181) or National Cyber Cell',
            description: 'Report under Cyber Harassment/Stalking section on cybercrime.gov.in or contact the local Women Cyber Cell.',
            actionType: 'Helpline & Reporting',
            contactInfo: 'Women Helpline: 1091 / 181 | Cyber Crime: 1930'
          },
          {
            stepNumber: 4,
            title: 'Lodge FIR under BNS Section 78 & 351',
            description: 'Submit an application to the Station House Officer (SHO) with attached evidence transcripts.',
            actionType: 'Legal Complaint'
          }
        ],
        similarCases: [
          {
            caseName: 'Shreya Singhal v. Union of India',
            court: 'Supreme Court of India',
            year: 2015,
            legalIssue: 'Standards of proof in digital harassment and harassment over social media platforms.',
            summary: 'Clarified scope of online intimidation vs free expression.',
            courtReasoning: 'Intimidation and repetitive stalking causing alarm are actionable under specific penal provisions.',
            outcome: 'Guidelines on digital evidence verification affirmed.',
            source: 'MOCK — (2015) 5 SCC 1'
          }
        ],
        sources: [
          { act: 'BNS 2023', section: 'Section 78', document: 'Bharatiya Nyaya Sanhita', type: 'Legislation (Mock Record)' },
          { act: 'BNS 2023', section: 'Section 351', document: 'Bharatiya Nyaya Sanhita', type: 'Legislation (Mock Record)' }
        ],
        disclaimer: 'DISCLAIMER: This analysis is for educational and informational purposes only based on mock legal datasets. In case of immediate physical threat, contact 112 emergency services immediately.'
      };
    }

    // Scenario 4: Tenancy / Property Deposit Dispute
    if (q.includes('landlord') || q.includes('deposit') || q.includes('rent') || q.includes('tenant') || q.includes('lease')) {
      return {
        query,
        isMock: true,
        problemAnalysis: {
          category: 'Property & Tenancy Grievance',
          subcategory: 'Wrongful Withholding of Security Deposit & Breach of Trust',
          issues: [
            'Non-refund of refundable security deposit post lawful tenancy termination',
            'Possible civil contract breach vs criminal breach of trust distinction',
            'Documentation of handover inspection and formal rent clearance receipts'
          ],
          summary: 'The dispute involves non-refund of tenancy security deposits. While primarily a civil breach of contractual covenants, intentional fraudulent retention may trigger criminal breach of trust.'
        },
        relevantLaws: [
          {
            act: 'BNS (2023)',
            section: '316',
            title: 'Criminal Breach of Trust',
            relevance: 'May be invoked if the deposit was entrusted under a clear obligation to refund upon handover and was dishonestly converted or retained.',
            punishment: 'Imprisonment up to 5 years, or fine, or both.',
            classification: 'Bailable / Non-Cognizable (general)',
            source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
          },
          {
            act: 'BNS (2023)',
            section: '318',
            title: 'Cheating (Deceitful Inducement)',
            relevance: 'Applicable if fraudulent intent not to refund deposit was present from the inception of the tenancy agreement.',
            punishment: 'Imprisonment up to 7 years and fine.',
            classification: 'Cognizable / Non-Bailable',
            source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
          }
        ],
        evidence: [
          { id: 'ev-1', title: 'Registered / Executed Rent Agreement', description: 'Clear copy of tenancy lease highlighting security deposit clause and refund timelines.' },
          { id: 'ev-2', title: 'Bank Transfer Records for Deposit Payment', description: 'Bank statement or NEFT/UPI receipt verifying transfer of initial deposit to landlord.' },
          { id: 'ev-3', title: 'Move-out Notice & Handover Confirmation', description: 'Email or WhatsApp notice giving 30-day move-out intimations, key handover receipt, and condition photos.' },
          { id: 'ev-4', title: 'Written Demands & Communication Trail', description: 'Copies of written reminders requesting deposit refund and landlord replies.' }
        ],
        nextSteps: [
          {
            stepNumber: 1,
            title: 'Issue a Formal Legal Notice via Registered Post',
            description: 'Engage an advocate to serve a formal 15-day statutory legal notice demanding refund with interest.',
            actionType: 'Formal Legal Notice'
          },
          {
            stepNumber: 2,
            title: 'File Grievance before Rent Authority / Rent Tribunal',
            description: 'Submit an application under the Model Tenancy Act / State Rent Control Act for expeditious deposit recovery.',
            actionType: 'Tribunal Redressal'
          },
          {
            stepNumber: 3,
            title: 'Approach Consumer Commission for Deficiency in Service',
            description: 'Where landlord/aggregator operates commercial co-living or managed housing, file a complaint on e-Daakhil.',
            actionType: 'Consumer Forum'
          }
        ],
        similarCases: [
          {
            caseName: 'Illustrative Tenancy Precedent (Mock)',
            court: 'High Court of Delhi',
            year: 2022,
            legalIssue: 'Maintainability of recovery and criminal breach of trust for withheld tenancy security deposits.',
            summary: 'Court held that failure to refund deposit without itemized repair proof entitles tenant to summary recovery plus interest.',
            courtReasoning: 'Security deposits are held in fiduciary trust and cannot be forfeited arbitrarily.',
            outcome: 'Full refund with 9% per annum interest ordered.',
            source: 'MOCK — Illustrative Case Record'
          }
        ],
        sources: [
          { act: 'BNS 2023', section: 'Section 316', document: 'Bharatiya Nyaya Sanhita', type: 'Legislation (Mock Record)' },
          { act: 'Model Tenancy Act', section: 'Section 11', document: 'Tenancy Framework', type: 'Statutory Guidelines (Mock Record)' }
        ],
        disclaimer: 'DISCLAIMER: This analysis is for educational and informational purposes only based on mock legal datasets. Please consult a civil advocate or local Rent Authority for formal legal proceedings.'
      };
    }

    // Scenario 5: Theft / Stolen Belongings
    if (q.includes('theft') || q.includes('stole') || q.includes('stolen') || q.includes('phone') || q.includes('purse') || q.includes('wallet')) {
      return {
        query,
        isMock: true,
        problemAnalysis: {
          category: 'Property Offenses',
          subcategory: 'Theft of Movable Property & Device Loss',
          issues: [
            'Dishonest removal of movable property without consent',
            'Potential identity/data compromise if stolen item is a smartphone or digital device',
            'Procedural requirement for Zero FIR and CEIR portal blocking'
          ],
          summary: 'The grievance relates to theft of personal property. For electronic devices, immediate IMEI blocking via the central portal and e-FIR registration are primary steps.'
        },
        relevantLaws: [
          {
            act: 'BNS (2023)',
            section: '303',
            title: 'Theft',
            relevance: 'Defines the offence of dishonestly taking movable property without lawful consent.',
            punishment: 'Imprisonment up to 3 years, or fine, or both; enhanced for repeat convictions.',
            classification: 'Cognizable / Non-Bailable',
            source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
          },
          {
            act: 'BNSS (2023)',
            section: '173',
            title: 'Zero FIR Registration',
            relevance: 'Allows filing of FIR at any police station regardless of where the theft occurred.',
            punishment: 'Procedural Right',
            classification: 'Reporting Procedure',
            source: 'MOCK — Bharatiya Nagarik Suraksha Sanhita, 2023'
          }
        ],
        evidence: [
          { id: 'ev-1', title: 'Purchase Invoice & Serial / IMEI Number', description: 'Bill or invoice showing device IMEI or vehicle chassis/registration number.' },
          { id: 'ev-2', title: 'Location & Time of Last Possession', description: 'Exact location coordinates or landmarks where property was last seen.' },
          { id: 'ev-3', title: 'CCTV Footage from Vicinity', description: 'Request nearby shopkeepers or traffic authorities to preserve CCTV footage.' }
        ],
        nextSteps: [
          {
            stepNumber: 1,
            title: 'Block Stolen Smartphone via CEIR Portal (Sanchar Saathi)',
            description: 'Visit ceir.sancharsaathi.gov.in to block device IMEI across all Indian telecom networks.',
            actionType: 'Immediate Blocking',
            contactInfo: 'Portal: https://ceir.sancharsaathi.gov.in'
          },
          {
            stepNumber: 2,
            title: 'File e-FIR / Police Lost Report',
            description: 'Lodge an e-FIR on your state police citizen portal or nearest station to obtain official police acknowledgement.',
            actionType: 'Statutory Complaint'
          },
          {
            stepNumber: 3,
            title: 'Deactivate Associated SIM & Bank UPI Sessions',
            description: 'Contact telecom operator to reissue duplicate SIM and unlink mobile banking credentials.',
            actionType: 'Security Precaution'
          }
        ],
        similarCases: [
          {
            caseName: 'State Precedent on Property Recovery (Mock)',
            court: 'High Court',
            year: 2021,
            legalIssue: 'Expeditious release of recovered stolen property under procedural provisions.',
            summary: 'Guidelines on photographing and releasing recovered stolen mobile phones without prolonged court retention.',
            courtReasoning: 'Property should be restored to lawful owner under interim custody bond.',
            outcome: 'Interim custody granted to victim upon verification.',
            source: 'MOCK — Illustrative Mock Case'
          }
        ],
        sources: [
          { act: 'BNS 2023', section: 'Section 303', document: 'Bharatiya Nyaya Sanhita', type: 'Legislation (Mock Record)' },
          { act: 'BNSS 2023', section: 'Section 173', document: 'Bharatiya Nagarik Suraksha Sanhita', type: 'Procedural Law (Mock Record)' }
        ],
        disclaimer: 'DISCLAIMER: This analysis is for educational and informational purposes only based on mock legal datasets. Please report stolen items promptly to your local police jurisdiction.'
      };
    }

    // Default / Generic Legal Query Response
    return {
      query,
      isMock: true,
      problemAnalysis: {
        category: 'General Legal Inquiry',
        subcategory: 'Statutory Evaluation & Legal Guidance',
        issues: [
          'Fact-based evaluation of user legal grievance',
          'Cross-referencing substantive provisions in Bharatiya Nyaya Sanhita (BNS)',
          'Identifying necessary evidence and formal complaint procedures'
        ],
        summary: `Based on your description ("${query}"), the system has synthesized potentially applicable provisions across Indian criminal jurisprudence, procedural safeguards, and evidentiary norms.`
      },
      relevantLaws: [
        {
          act: 'BNS (2023)',
          section: 'General Provisions',
          title: 'Offenses Under Bharatiya Nyaya Sanhita, 2023',
          relevance: 'Applicable statutory provisions depend on exact factual elements, mens rea (intention), and overt acts.',
          punishment: 'Prescribed according to specific section classifications.',
          classification: 'Statutory Framework',
          source: 'MOCK — Bharatiya Nyaya Sanhita, 2023'
        },
        {
          act: 'BNSS (2023)',
          section: '173',
          title: 'Reporting & FIR Procedures',
          relevance: 'Governs how information regarding offenses is formally registered with law enforcement.',
          punishment: 'Procedural Provision',
          classification: 'Reporting Standard',
          source: 'MOCK — Bharatiya Nagarik Suraksha Sanhita, 2023'
        },
        {
          act: 'BSA (2023)',
          section: '61',
          title: 'Admissibility of Evidence',
          relevance: 'Governs the standard of proof and admissibility of documentary and electronic records.',
          punishment: 'Evidentiary Rule',
          classification: 'Admissibility Standard',
          source: 'MOCK — Bharatiya Sakshya Adhiniyam, 2023'
        }
      ],
      evidence: [
        { id: 'ev-1', title: 'Chronological Written Account', description: 'Write down a detailed timeline of events with dates, names, locations, and witnesses.' },
        { id: 'ev-2', title: 'Documentary & Digital Records', description: 'Collect all contracts, notices, messages, emails, receipts, or audio/visual recordings.' },
        { id: 'ev-3', title: 'Witness Details', description: 'Note contact details and statements of any individuals who directly witnessed the event.' }
      ],
      nextSteps: [
        {
          stepNumber: 1,
          title: 'Document Facts & Organize Evidence',
          description: 'Create an indexed file containing the timeline, agreements, and supporting records.',
          actionType: 'Preparation'
        },
        {
          stepNumber: 2,
          title: 'Seek Qualified Legal Counsel',
          description: 'Consult a practicing advocate to evaluate civil remedies vs. criminal complaint avenues.',
          actionType: 'Advisory'
        },
        {
          stepNumber: 3,
          title: 'Approach the Appropriate Redressal Authority',
          description: 'File a formal representation or complaint with the competent forum, tribunal, or police jurisdiction.',
          actionType: 'Formal Action'
        }
      ],
      similarCases: [
        {
          caseName: 'General Judicial Principles on Legal Notice & FIR Registration (Mock)',
          court: 'Supreme Court of India',
          year: 2022,
          legalIssue: 'Duty of police to record information disclosing cognizable offenses.',
          summary: 'Reiterated mandatory registration requirements when preliminary facts indicate commission of a cognizable wrong.',
          courtReasoning: 'Statutory compliance is essential to preserve the rule of law and protect complainant rights.',
          outcome: 'Standard operating procedures mandated for law enforcement.',
          source: 'MOCK — Illustrative Case Record'
        }
      ],
      sources: [
        { act: 'BNS 2023', section: 'General', document: 'Bharatiya Nyaya Sanhita, 2023', type: 'Legislation (Mock Record)' },
        { act: 'BNSS 2023', section: 'Section 173', document: 'Bharatiya Nagarik Suraksha Sanhita', type: 'Procedural Law (Mock Record)' }
      ],
      disclaimer: 'DISCLAIMER: This analysis is for educational and informational purposes only based on mock legal datasets. It does not constitute formal legal advice.'
    };
  }
}

export const mockAiProvider = new MockAiProvider();
