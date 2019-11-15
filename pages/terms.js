import React from 'react';
import Header from '@makerdao/ui-components-header';
import {
  Box,
  Flex,
  Text
} from '@makerdao/ui-components-core';
import useMaker from '../hooks/useMaker';
import { Breakout } from '../components/Typography';
import Subheading from '../components/Subheading';
import Footer from '../components/Footer';
import LegalTextLayout from '../layouts/LegalTextLayout';

function Terms() {
  const { account } = useMaker();
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <Header />
      <Box borderBottom="1px solid" borderColor="grey.300" />
      <div>
        <Subheading account={account} />
      </div>
      <Box width={{l: '680px'}} px={{s: 'm'}} py={{s: 'l', l: '69px'}} alignSelf="center">
        <Text.h2 mb="m" textAlign={{ s: 'center', l: 'left' }}>
          Privacy Policy
        </Text.h2>
        <Breakout fontSize={'16px'} fontWeight={'500'} textAlign={{ s: 'center', l: 'left' }}>
            Last updated: 02 October 2019
        </Breakout>
        <LegalTextLayout>
          <p>
            Please read these Terms of Service (this “<strong>Agreement</strong>”)
            carefully. Your use or access of the Site or the Services (as defined
            below) constitutes your consent to this Agreement.
          </p>
          <p>
            This Agreement is between you (the “<strong>User</strong>” and
            collectively with others using the Site, “<strong>Users</strong>”) and
            Maker Ecosystem Growth Holdings, Inc., a company organized under the
            laws of Cayman Islands (“<strong>Company</strong>” or “we,” “our” or
            “us” and together with you, the “Parties”) concerning your use of
            (including any access to) Company’s websites, currently located at
            oasis.app, mobile applications, web applications, decentralized
            applications, smart contracts and API located at any of Company’s
            websites (together with any materials and services available therein,
            and successor website(s) or application(s) thereto, the “
            <strong>Site</strong>”). This Agreement hereby incorporates by this
            reference any additional terms and conditions with respect to the Site
            posted by Company to the Site, or otherwise made available to you by
            Company.
          </p>
          <p>
            By clicking or tapping any button or box marked “accept” or “agree” (or
            a similar term) in connection with this Agreement, or by accessing or
            using the Site or the Services (as defined below), you agree to be bound
            by this Agreement, a current version of which is available at the Site,
            and which may be modified from time to time at our sole discretion in
            accordance with section 3 below.
          </p>

          <h2>1. Use of Services</h2>

          <h3>1.1. Services</h3>

          <p>
            The Company has developed Oasis – an online, decentralized and
            autonomous environment that displays price information and autonomous
            smart contract mechanisms of digital tokens and assets (“
            <strong>Digital Assets</strong>”) and provides the user-interface that
            guides your access to Oasis (the “<strong>Services</strong>”).
          </p>
          <p>
            You affirm that you are aware and acknowledge that Company is a
            non-profit entity and non-custodial provider of software services,
            meaning that the Company does not custody, control or manage user funds
            in any manner whatsoever. The Services are deployed in a decentralized
            environment wherein the Services can be autonomously and directly
            accessed by the Users without any involvement or actions taken by
            Company or any third-party.
          </p>
          <h3>1.2. Your Use of Services</h3>
          <p>You represent and warrant to Company that:</p>
          <ul>
            <li>
              You are eligible to enter into the Agreement and use the Services in
              accordance with section 2 below.
            </li>
            <li>
              This Agreement is valid, and binding on you, and enforceable against
              you.
            </li>
            <li>
              You will comply with all terms and conditions of this Agreement.
            </li>
            <li>
              You are not entering into the Agreement and using the Services in your
              capacity as a consumer.
            </li>
            <li>
              You acknowledge and agree that from time to time the Site may be
              inaccessible or inoperable for any reason, including, without
              limitation: (i) equipment malfunctions; (ii) periodic maintenance
              procedures or repairs which Company may undertake from time to time;
              (iii) causes beyond the control of Company or which are not reasonably
              foreseeable by Company; (iv) disruptions and temporary or permanent
              unavailability of the underlying blockchain infrastructure; (v)
              unavailability of third party service providers or external partners
              for any reason. In this case, you may be prevented from accessing or
              using the Services.
            </li>
            <li>
              You acknowledge and agree that the Site and the Services may evolve
              over time. This means Company may apply changes, replace, or
              discontinue (temporarily or permanently) the Services at any time in
              Company’s sole discretion.
            </li>
            <li>
              You acknowledge and agree that the pricing information provided on the
              Site does not represent an offer, a solicitation of an offer, or any
              advice regarding, or recommendation to enter into, a transaction with
              Company.
            </li>
            <li>
              You acknowledge and agree that the Company does not act as an agent
              for any of the Users.
            </li>
            <li>
              You are solely responsible for your use of the Services, including all
              transfers of Digital Assets you make.
            </li>
            <li>
              In connection with using the Services, you will only transfer
              legally-obtained Digital Assets that belong to you.
            </li>
            <li>
              You will obey all applicable laws in connection with using the
              Services. You will not use the Site or the Services if the laws of
              your country, or any other applicable law, prohibit you from doing so
              in accordance with this Agreement.
            </li>
            <li>
              You are solely responsible for reporting and paying any taxes
              applicable to your use of the Services.
            </li>
            <li>
              You are not and have not been placed on any excluded or denied persons
              lists by any authority.
            </li>
            <li>
              You are responsible for complying with any applicable export controls
              or embargoes.
            </li>
            <li>
              Any Digital Assets used by you in connection with the Services are
              either owned by you or that you are validly authorized to carry out
              actions using such Digital Assets.
            </li>
            <li>
              You acknowledge and agree that we have no control over, or liability
              for, the delivery, quality, safety, legality or any other aspect of
              any Digital Assets that you may transfer to or from a third party, and
              that we are not responsible for ensuring that an entity with whom you
              transact actually completes the transaction or is authorized to do so.
              If you experience a problem with any Digital Assets purchased from or
              sold to a third party through the Services, you bear the entire risk.
            </li>
            <li>
              You covenant that all activity and conduct in connection with your use
              of the Services, including any resultant transactions of the Digital
              Assets, will be in compliance with all applicable law, rules,
              regulations, requirements, guidelines and policies of any governmental
              or quasi-governmental body or regulatory agency, any self-regulatory
              organization.
            </li>
          </ul>
          <h3>1.3. Fees</h3>
          <p>
            Company does not charge any fees for use of Services. However, in
            connection with your use of the Services, you agree to bear all costs
            necessary to conduct a transaction, such as gas cost. We attempt to
            provide accurate costs information, but this information is highly
            volatile and can change quickly without Users necessarily being aware of
            these changes.
          </p>
          <h2>2. Eligibility</h2>
          <p>
            You affirm that you are of legal age to enter into this Agreement where
            you live and have the legal capacity to enter into this Agreement, as
            well as that you are fully able and competent to enter into the terms,
            conditions, obligations, affirmations, representations and warranties
            set forth in this Agreement and to abide by and comply with this
            Agreement.
          </p>
          <p>
            Services are available for your business use only. You are not allowed
            to enter into this Agreement and use the Services in your capacity as a
            consumer. If you are an individual accessing or using the Site on behalf
            of, or for the benefit of, any corporation, partnership or other entity
            with which you are associated (an “<strong>Organization</strong>”), then
            you are agreeing to this Agreement on behalf of yourself and such
            Organization, and you represent and warrant that you have the legal
            authority to bind such Organization to this Agreement. References to
            “you” and “your” in this Agreement will refer to both the individual
            using the Site and to any such Organization.
          </p>
          <p>
            You represent that you are legally permitted to use the service in your
            jurisdiction including owning Digital Assets, and interacting with the
            Services in any way. You further represent you are responsible for
            ensuring compliance with the laws of your jurisdiction and acknowledge
            that Company is not liable for your compliance with such laws. You
            further represent and warrant that you will not use the Site or the
            Services if the laws of your country of residency or establishment
            prohibit you from doing so in accordance with this Agreement. Finally,
            you represent and warrant that you will not use the Service for any
            illegal activity.
          </p>
          <h2>3. Modification of Agreement and Transfer</h2>
          <p>
            This Agreement may be discretionarily modified or replaced at any time,
            unless stated otherwise herein. The most current version of this
            Agreement will be posted on the Site with the “Last Revised” date at the
            top of the Agreement changed. Any changes or modifications will be
            effective immediately upon posting the revisions to the Site. You shall
            be responsible for reviewing and becoming familiar with any such
            modifications. You waive any right you may have to receive specific
            notice of such changes or modifications. Use of the Site or the Services
            by you after any modification to the Agreement constitutes your
            acceptance of the Agreement as modified. If you do not agree to the
            Agreement in effect when you access or use the Services, you must stop
            using the Services. We may, at any time and without liability or prior
            notice, modify or discontinue all or part of the Site (including access
            to the Site via any third-party links). Neither party may assign or
            transfer any rights or obligations under this Agreement, provided that
            Company may assign this Agreement without your prior consent to any of
            Company’s affiliates, or to its successors in interest of any business
            associated with the services provided by Company. This Agreement shall
            be binding upon the permitted assigns or transferees of each party.
          </p>
          <h2>4. Representations, Warranties, and Risks</h2>

          <h3>4.1. No Representation or Warranty</h3>
          <p>
            You expressly understand and agree that your use of the Service is at
            your sole risk.
          </p>
          <p>
            WE MAKE AND EXPRESSLY DISCLAIM ALL REPRESENTATIONS AND WARRANTIES,
            EXPRESS, IMPLIED OR STATUTORY, AND WITH RESPECT TO THE SERVICES AND THE
            CODE PROPRIETARY OR OPEN SOURCE, WE SPECIFICALLY DO NOT REPRESENT AND
            WARRANT AND EXPRESSLY DISCLAIM ANY REPRESENTATION OR WARRANTY, EXPRESS,
            IMPLIED OR STATUTORY, INCLUDING WITHOUT LIMITATION, ANY REPRESENTATIONS
            OR WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, USAGE,
            SECURITY, SUITABILITY OR FITNESS FOR ANY PARTICULAR PURPOSE, OR AS TO
            THE WORKMANSHIP OR TECHNICAL CODING THEREOF, OR THE ABSENCE OF ANY
            DEFECTS THEREIN, WHETHER LATENT OR PATENT. WE DO NOT REPRESENT OR
            WARRANT THAT THE SERVICES, CODE AND ANY RELATED INFORMATION ARE
            ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE.
          </p>
          <h3>4.2. Disclaimer of Fiduciary Duties</h3>
          <p>
            To the fullest extent permitted by law and notwithstanding any other
            provision of this Agreement or any other agreement contemplated herein
            or applicable provisions of law or equity or otherwise, the parties
            hereto hereby agree to eliminate any and all fiduciary duties Company
            may have to the user, its affiliates, or the end users of the Services,
            the site or its content, provided that such exclusion or limitation of
            liability shall not extend to the Company’s misappropriation of assets
            or funds of its users or its affiliates, or the end users of the
            Services, Site or content provided by Company or other acts or omissions
            that constitute a bad faith violation of the implied contractual
            covenant of good faith and fair dealing.
          </p>
          <h3>4.3 Sophistication and Risk of Cryptographic Systems</h3>
          <p>
            By utilizing the Services or interacting with the Site in any way, you
            represent that you understand the inherent risks associated with
            cryptographic systems; and warrant that you have an understanding of the
            usage and intricacies of native cryptographic tokens, like Ether (ETH)
            and Bitcoin (BTC), smart contract based tokens such as those that follow
            the Ethereum Token Standard
            (https://github.com/ethereum/EIPs/issues/20), and blockchain-based
            software systems.
          </p>
          <p>
            The Company does not own or control any of the underlying software
            through which blockchain networks are formed. In general, the underlying
            software for blockchain networks tends to be open source such that
            anyone can use, copy, modify, and distribute it. By using the Services,
            you acknowledge and agree (i) that Company is not responsible for
            operation of the underlying software and networks that there exists no
            guarantee of functionality, security, or availability of such software
            and networks; and (ii) that the underlying protocols are subject to
            sudden changes in operating rules (known as “ Forks ”), and that such
            Forks may materially affect the Services. It might be discretionarily
            decided not to support (or cease supporting) the Forked network
            entirely. You acknowledge and agree that Company assumes absolutely no
            responsibility whatsoever in respect of any underlying software
            protocols, whether Forked or not.
          </p>
          <p>
            Underlying networks use public/private key cryptography. You alone are
            responsible for securing your private key(s). Company does not have
            access to your private key(s). Losing control of your private key will
            permanently and irreversibly deny you access to funds on the Ethereum
            blockchain or other network. Neither Company nor any other person will
            be able to retrieve or protect your funds. Once your private key(s) is
            lost, you will not be able to transfer your Digital Assets to any other
            address or wallet. If this occurs, you will not be able to realize any
            value or utility that you may hold now or in future.
          </p>
          <h3>4.4 Risk of Regulatory Actions in One or More Jurisdictions</h3>
          <p>
            The Services, Digital Assets and ETH could be impacted by one or more
            regulatory inquiries or regulatory action, which could impede or limit
            the ability of Company to continue to develop, or which could impede or
            limit your ability to access or use the Services or Ethereum blockchain,
            including access to your Digital Assets or other funds.
          </p>
          <h3>4.5 Risk of Weaknesses or Exploits in the Field of Cryptography</h3>
          <p>
            You acknowledge and understand that Cryptography is a progressing field.
            Advances in code cracking or technical advances such as the development
            of quantum computers may present risks to cryptocurrencies, Digital
            Assets and Services, which could result in the theft or loss of your
            Digital Assets or property. To the extent possible, it is intended to
            update the protocol underlying the Services to account for any advances
            in cryptography and to incorporate additional security measures, but
            does not guarantee or otherwise represent full security of the system.
            By using the Services or accessing the Site, you acknowledge these
            inherent risks.
          </p>
          <h3>4.6 Volatility of Cryptocurrency</h3>
          <p>
            You understand that Ethereum and other blockchain technologies and
            associated Digital Assets, currencies or tokens are highly volatile due
            to many factors including but not limited to adoption, speculation,
            technology and security risks. You also acknowledge that the cost of
            transacting on such technologies is variable and may increase at any
            time causing impact to any activities taking place on the Ethereum
            blockchain. You acknowledge these risks and represent that Company
            cannot be held liable for such fluctuations or increased costs.
          </p>

          <h3>4.7 Application Security</h3>
          <p>
            You acknowledge that the Services are subject to flaws and acknowledge
            that you are solely responsible for evaluating any code provided by the
            Services or Site. This warning and others provided in this Agreement by
            Company in no way evidence or represent an ongoing duty to alert you to
            all of the potential risks of utilizing the Services or accessing the
            Site.
          </p>

          <h3>4.8 Site Accuracy</h3>
          <p>
            Although it is intended to provide accurate and timely information on
            the Site, the Site or relevant tools may not always be entirely
            accurate, complete or current and may also include technical
            inaccuracies or typographical errors. In an effort to continue to
            provide you with as complete and accurate information as possible,
            information may be changed or updated from time to time without notice,
            including, without limitation, information regarding our policies.
            Accordingly, you should verify all information before relying on it, and
            all decisions based on information contained on the Site or relevant
            tools are your sole responsibility and Company shall have no liability
            for such decisions. Links to third-party materials (including, without
            limitation, websites) may be provided as a convenience but are not
            controlled by any entity. You acknowledge and agree that we are not
            responsible for any aspect of the information, content, or services
            contained in any third-party materials or on any third party sites
            accessible or linked to the Site or available via other relevant tools.
          </p>
          <p>
            No representation is made as to the accuracy, completeness or
            appropriateness for any particular purpose of any pricing information
            distributed via the Site. Prices and pricing information may be higher
            or lower than prices available on other platforms.
          </p>

          <h3>4.9 Technical Knowledge</h3>
          <p>
            Any use or interaction with the Services requires a comprehensive
            understanding of applied cryptography and computer science in order to
            appreciate the inherent risks, including those listed above. You
            represent and warrant that you possess relevant knowledge and skills.
            Any reference to a type of Digital Asset on the Site does not indicate
            our approval or disapproval of the underlying technology regarding such
            type of Digital Asset, and should not be used as a substitute for your
            own understanding of the risks specific to each type of Digital Asset.
            We make no warranty as to the suitability of the Digital Assets
            referenced on the Site and assume no fiduciary duty in our relations
            with you.
          </p>

          <h3>4.10 Financial Risks</h3>
          <p>
            Use of the Services, in particular for trading Digital Assets, may carry
            financial risk. Digital Assets are, by their nature, highly
            experimental, risky, volatile and transactions carried through the
            Services are irreversible, final and there are no refunds. You
            acknowledge and agree that you will access and use the Site and the
            Services at your own risk. The risk of loss in trading Digital Assets
            can be substantial. You should, therefore, carefully consider whether
            such trading is suitable for you in light of your circumstances and
            financial resources. By using the Services, you represent that you have
            been, are and will be solely responsible for making your own independent
            appraisal and investigations into the risks of a given transaction and
            the underlying Digital Assets. You represent that you have sufficient
            knowledge, market sophistication, professional advice and experience to
            make your own evaluation of the merits and risks of any transaction
            conducted via the Services or any underlying Digital Asset. You accept
            all consequences of using the Services, including the risk that you may
            lose access to your Digital Assets indefinitely. All transaction
            decisions are made solely by you. Notwithstanding anything in this
            Agreement, we accept no responsibility whatsoever for, and will in no
            circumstances be, liable to you in connection with the use of the
            Services for performing Digital Asset transactions. Under no
            circumstances will the operation of all or any portion of the Site or
            the Services be deemed to create a relationship that includes the
            provision or tendering of investment advice.
          </p>

          <h3>4.11 Applicable Law and Tax</h3>
          <p>
            You are responsible for complying with applicable law. You agree that we
            are not responsible for determining whether or which laws may apply to
            your use of Services, including tax laws. You are solely responsible for
            reporting and paying any taxes arising from your use of the Site and
            Services.
          </p>
          <p>
            Company must comply with applicable law. Applicable law, regulation, and
            executive orders may require us to, upon request by government agencies,
            take certain actions or provide information.
          </p>

          <h3>4.12 Operational Risks</h3>
          <p>
            You are aware of and accept the risk of operational challenges. The Site
            may experience sophisticated cyber attacks, unexpected surges in
            activity or other operational or technical difficulties that may cause
            interruptions to or delays on the Site. You agree to accept the risk of
            the Services failure resulting from unanticipated or heightened
            technical difficulties, including those resulting from sophisticated
            attacks, and you agree not to hold us accountable for any related
            losses. We will not bear any liability, whatsoever, for any damage or
            interruptions caused by any viruses that may affect your computer or
            other equipment, or any phishing, spoofing or other attack. We advise
            the regular use of a reputable and readily available virus screening and
            prevention software. We do not guarantee that the Site is or will remain
            updated, complete, correct or secure, or that access to the Site will be
            uninterrupted. The Site may include inaccuracies, errors and materials
            that violate or conflict with this Agreement. Additionally, third
            parties may make unauthorized alterations to the Site or the software
            underlying the Services. Accordingly, you should verify all information
            on the Site before relying on it, and all decisions based on information
            contained on the Site are your sole responsibility and we will have no
            liability for such decisions.
          </p>

          <h2>5. Indemnity</h2>
          <p>
            You agree to release and to indemnify, defend and hold harmless Company,
            as well as its officers, directors, employees and representatives, from
            and against any and all losses, liabilities, expenses, damages, costs
            (including attorneys’ fees, fees or penalties imposed by any regulatory
            authority and court costs) claims or actions of any kind whatsoever
            arising or resulting from your use of the Services, your violation of
            this Agreement, your violation of any law, rule, or regulation, or the
            rights of any third party, and any of your acts or omissions that
            implicate publicity rights, defamation or invasion of privacy. Company
            reserves the right, at its own expense, to assume exclusive defense and
            control of any matter otherwise subject to indemnification by you and,
            in such case, you agree to cooperate with Company in the defense of such
            matter.
          </p>

          <h2>6. Limitation on liability</h2>
          <p>
            You acknowledge and agree that you assume full responsibility for your
            use of the Site and Services. You acknowledge and agree that any
            information you send or receive during your use of the Site and Services
            may not be secure and may be intercepted or later acquired by
            unauthorized parties. You acknowledge and agree that your use of the
            Site and Service is at your own risk. Recognizing such, you understand
            and agree that, to the fullest extent permitted by applicable law,
            neither Company nor any related entities, suppliers or licensors will be
            liable to you for any direct, indirect, incidental, special,
            consequential, punitive, exemplary or other damages of any kind,
            including without limitation damages for loss of profits, goodwill, use,
            data or other tangible or intangible losses or any other damages based
            on contract, tort, strict liability or any other theory (even if Company
            had been advised of the possibility of such damages), resulting from the
            Site or Services; the use or the inability to use the Site or Service;
            unauthorized access to or alteration of your transmissions or data;
            statements or conduct of any third party on the Site or Service; any
            actions we take or fail to take as a result of communications you send
            to us; human errors; technical malfunctions; failures, including public
            utility or telephone outages; omissions, interruptions, latency,
            deletions or defects of any device or network, providers, or software
            (including, but not limited to, those that do not permit participation
            in the service); any injury or damage to computer equipment; inability
            to fully access the site or service or any other website; theft,
            tampering, destruction, or unauthorized access to, images or other
            content of any kind; data that is processed late or incorrectly or is
            incomplete or lost; typographical, printing or other errors, or any
            combination thereof; or any other matter relating to the Site or
            Service.
          </p>

          <p>
            Some jurisdictions do not allow the exclusion of certain warranties or
            the limitation or exclusion of liability for incidental or consequential
            damages. accordingly, some of the above limitations may not apply to
            you.
          </p>

          <h2>7. Open Source and Proprietary Rights</h2>
          <p>
            Some software used in our Services may be offered under an open source
            license that we will make available to you. Documentation of open source
            code is available on the{' '}
            <a
              href="https://github.com/makerdao"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maker Github
            </a>{' '}
            page. This documentation, including any code shown in it, is licensed
            under the{' '}
            <a
              href="https://www.gnu.org/licenses/agpl-3.0.en.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              GNU Affero General Public License version 3
            </a>{' '}
            and you agree to abide by the terms of this license.
          </p>
          <p>
            The “Oasis” name, the Oasis logo, other related trademarks (“Oasis
            DeFi,” “Oasis DEX”), and the web domains and URLs are property of Maker
            Ecosystem Growth Foundation and “Oasis Pro” is owned by Oasis Pro Buyer,
            LLC and are not covered under the licenses above. Using our Services
            does not give you ownership of any proprietary intellectual property
            rights in our Services or the content you access. You may not use
            proprietary content from our Services unless you obtain permission from
            its owner or are otherwise permitted by law. These terms do not grant
            you the right to use any branding or logos used in our Services. You may
            not remove, obscure, or alter any legal notices displayed in or along
            with our Services.
          </p>

          <h2>8. Links</h2>
          <p>
            The Service provides, or third parties may provide, links to other World
            Wide Web or accessible sites, applications or resources. Because Company
            has no control over such sites, applications and resources, you
            acknowledge and agree that Company is not responsible for the
            availability of such external sites, applications or resources, and does
            not endorse and is not responsible or liable for any content,
            advertising, products or other materials on or available from such sites
            or resources. You further acknowledge and agree that Company shall not
            be responsible or liable, directly or indirectly, for any damage or loss
            caused or alleged to be caused by or in connection with use of or
            reliance on any such content, goods or services available on or through
            any such site or resource.
          </p>

          <h2>9. Termination and Suspension</h2>
          <p>
            Company may terminate or suspend all or part of the Site and/or Services
            access immediately, without prior notice or liability, if you breach any
            of the terms or conditions of the Agreement. Upon termination of your
            access, your right to use the Services will immediately cease. The
            following provisions of the Agreement survive any termination of these
            Agreement: INDEMNITY; REPRESENTATIONS, WARRANTIES AND RISKS; LIMITATION
            ON LIABILITY; OUR PROPRIETARY RIGHTS; LINKS; TERMINATION; NO THIRD-PARTY
            BENEFICIARIES; ARBITRATION AND CLASS ACTION WAIVER; USE OF SERVICES.
          </p>

          <h2>10. No Third-Party Beneficiaries</h2>
          <p>
            You agree that, except as otherwise expressly provided in this
            Agreement, there shall be no third party beneficiaries to the Agreement.
          </p>

          <h2>11. Arbitration and Class Action Waiver</h2>

          <h3>11.1 Initial Dispute Resolution</h3>
          <p>
            Please read the following section carefully because it requires you to
            arbitrate certain disputes with the Company and limits the manner in
            which you can seek relief from the Company.
          </p>

          <h3>11.2 Binding Arbitration</h3>
          <p>
            Except for disputes in which either party seeks to bring an individual
            action in small claims court or seeks injunctive or other equitable
            relief for the alleged unlawful use of copyrights, trademarks, trade
            names, logos, trade secrets or patents, you and the Company: (a) waive
            your right to have any and all disputes or claims arising from this
            Agreement or the Company (collectively, “Disputes”) resolved in a court;
            and (b) waive your right to a jury trial. Instead, you and the Company
            will arbitrate Disputes through binding arbitration (which is the
            referral of a Dispute to one or more persons charged with reviewing the
            Dispute and making a final and binding determination to resolve it,
            instead of having the Dispute decided by a judge or jury in court).
          </p>

          <h3>
            11.3. No Class Arbitrations, Class Actions or Representative Actions
          </h3>
          <p>
            You and the Company agree that any dispute is personal to you and the
            Company and that any such dispute will be resolved solely through
            individual arbitration and will not be brought as a class arbitration,
            class action or any other type of representative proceeding. Neither
            party agrees to class arbitration or to an arbitration in which an
            individual attempts to resolve a dispute as a representative of another
            individual or group of individuals. Further, you and the Company agree
            that a dispute cannot be brought as a class, or other type of
            representative action, whether within or outside of arbitration, or on
            behalf of any other individual or group of individuals.
          </p>

          <h3>11.4 Process</h3>
          <p>
            You and the Company agree that you will notify each other in writing of
            any Dispute within thirty (30) days of when it arises so that the
            parties can attempt, in good faith, to resolve the Dispute informally.
            Notice to the Company shall be provided by sending an email to
            legal@oasis.app. Your notice must include: (1) your name, postal
            address, and email address; (2) a description of the nature or basis of
            the Dispute; and (3) the specific relief that you are seeking. If you
            and the Company cannot agree how to resolve the Dispute within thirty
            (30) days of the Company receiving the notice, either you or Company
            may, as appropriate pursuant to this Section 11, commence an arbitration
            proceeding or file a claim in court. You and the Company agree that any
            arbitration or claim must be commenced or filed within one (1) year
            after the Dispute arose; otherwise, you and the Company agree that the
            claim is permanently barred (which means that you will no longer have
            the right to assert a claim regarding the Dispute). You and the Company
            agree that: (a) any arbitration will occur in New York County, New York;
            (b) arbitration will be conducted confidentially by a single arbitrator
            in accordance with the rules of JAMS; and (c) the state or federal
            courts in New York will have exclusive jurisdiction over the enforcement
            of an arbitration award and over any Dispute between the parties that is
            not subject to arbitration. You may also litigate a Dispute in small
            claims court located in the county where you reside if the Dispute meets
            the requirements to be heard in small claims court.
          </p>

          <h3>11.5. Authority of Arbitrator</h3>
          <p>
            As limited by the FAA, this Agreement and applicable JAMS rules, the
            arbitrator will have: (a) the exclusive authority and jurisdiction to
            make all procedural and substantive decisions regarding a Dispute; and
            (b) the authority to grant any remedy that would otherwise be available
            in court. The arbitrator may only conduct an individual arbitration and
            may not consolidate more than one individual’ s claims, preside over any
            type of class or representative proceeding or preside over any
            proceeding involving more than one individual.
          </p>

          <h3>11.6. Rules of JAMS</h3>
          <p>
            The rules of, and additional information about, JAMS are available on
            the JAMS website at http://www.jamsadr.com/, as may be updated from time
            to time. By agreeing to be bound by this Agreement, you either: (a)
            acknowledge and agree that you have read and understand the rules of
            JAMS; or (b) waive your opportunity to read the rules of JAMS and any
            claim that the rules of JAMS are unfair or should not apply for any
            reason.
          </p>

          <h3>11.7 Governing law</h3>
          <p>
            For any dispute not subject to arbitration you and Company agree to
            submit to the personal and exclusive jurisdiction of and venue in the
            federal and state courts located in New York, New York. You further
            agree to accept service of process by mail, and hereby waive any and all
            jurisdictional and venue defenses otherwise available. The Agreement and
            the relationship between you and Company shall be governed by the laws
            of the State of New York without regard to conflict of law provisions.
          </p>

          <h2>12. Prohibited Use</h2>
          <p>
            You may not use the Service to engage in the following categories of
            activity (" Prohibited Uses "). The specific types of use listed below
            are representative, but not exhaustive. If you are uncertain as to
            whether or not your use of the Services involves a Prohibited Use, or
            have questions about how these requirements apply to you, please contact
            us at legal@oasis.app. By using the Site or Services, you confirm that
            you will not use the Site or Services to do any of the following:
          </p>

          <ul>
            <li>
              Unlawful Activity: Activity which would violate, or assist in
              violation of, any law, statute, ordinance, or regulation, sanctions
              programs administered in any relevant country, including but not
              limited to the U.S. Department of Treasury's Office of Foreign Assets
              Control (" OFAC "), or which would involve proceeds of any unlawful
              activity; publish, distribute or disseminate any unlawful material or
              information;
            </li>
            <li>
              Abuse Other Users: Interfere with another individual's or entity's
              access to or use of any Services; defame, abuse, extort, harass,
              stalk, threaten or otherwise violate or infringe the legal rights
              (such as, but not limited to, rights of privacy, publicity and
              intellectual property) of others; incite, threaten, facilitate,
              promote, or encourage hate, racial intolerance, or violent acts
              against others; harvest or otherwise collect information from the Site
              about others, including without limitation email addresses, without
              proper consent;
            </li>
            <li>
              Fraud: Activity which operates to defraud Company, other Users, or any
              other person; provide any false, inaccurate, or misleading
              information;
            </li>
            <li>
              Intellectual Property Infringement: Engage in transactions involving
              items that infringe or violate any copyright, trademark, right of
              publicity or privacy or any other proprietary right under the law,
              including but not limited to sales, distribution, or access to
              counterfeit music, movies, software, or other licensed materials
              without the appropriate authorization from the rights holder; use of
              Company intellectual property, name, or logo, including use of Company
              trade or service marks, without express consent from Company or in a
              manner that otherwise harms Company; any action that implies an untrue
              endorsement by or affiliation with Company.
            </li>
            <li>
              Illegal Source of Funds: Use or accessing the Site or Services to
              transmit or exchange Digital Assets that are the direct or indirect
              proceeds of any criminal or fraudulent activity, including terrorism
              or tax evasion.
            </li>
            <li>
              Other Prohibited Activities: Additionally, you confirm that you may
              not, nor may you assist other parties to:
              <ul>
                <li>
                  attempt to disable or circumvent any security or access control
                  mechanism of the Site or Services, where applicable;
                </li>
                <li>
                  design or assist in designing cheats, exploits, hacks, modes or
                  any other unauthorized third-party software to modify or interfere
                  with the Services, with the exception of automation software and
                  bots, provided that such automation software and bots operate in
                  the ordinary course of using the Services and do not cause
                  disruption or harm to the Services;
                </li>
                <li>
                  institute, assist or become involved in any type of attack,
                  including distribution of a virus, attacks upon the Services or
                  the Site, that prevent access to or use of any of the above, other
                  attempts to disrupt any of the above, gain unauthorized access to
                  any of the above, or disrupt any other person’s use or enjoyment
                  of any of the above;
                </li>
                <li>
                  attempt to, or harass, abuse, or harm of another person or entity,
                  including our employees and service providers;
                </li>
                <li>
                  impersonate another user or otherwise misrepresent yourself;
                </li>
                <li>
                  take any action that imposes an unreasonable or disproportionately
                  large load on our infrastructure; or detrimentally interfere with,
                  intercept, or expropriate any system, data, or information.
                </li>
              </ul>
            </li>
          </ul>
          <h2>13. General Information</h2>
          <h3>13.1 Entire Agreement</h3>
          <p>
            This Agreement (and any additional terms, rules and conditions of
            participation that may be posted on the Site) constitute the entire
            agreement with respect to the Services and supersedes any prior
            agreements, oral or written. In the event of a conflict between this
            Agreement and the additional terms, rules and conditions of
            participation, the latter will prevail over the Agreement to the extent
            of the conflict.
          </p>
          <h3>13.2 Waiver and Severability of the Agreement</h3>
          <p>
            The failure of any entity to exercise or enforce any right or provision
            of the Agreement shall not constitute a waiver of such right or
            provision. If any provision of the Agreement is found by an arbitrator
            or court of competent jurisdiction to be invalid, the parties
            nevertheless agree that the arbitrator or court should endeavor to give
            effect to the parties' intentions as reflected in the provision, and the
            other provisions of the Agreement remain in full force and effect.
          </p>

          <h3>13.3 Statute of Limitations</h3>
          <p>
            You agree that regardless of any statute or law to the contrary, any
            claim or cause of action arising out of or related to the use of the
            Services or the Site must be filed within one (1) year after such claim
            or cause of action arose or be forever barred.
          </p>

          <h3>13.4 Section Titles</h3>
          <p>
            The section titles in the Agreement are for convenience only and have no
            legal or contractual effect.
          </p>

          <h3>13.5 Privacy and Transparency</h3>
          <p>
            Company respects the privacy of the Users by not requesting any
            information that is unnecessary for the use of the Services. Since the
            Services can be autonomously and directly accessed by the Users without
            any involvement or actions taken by Company or any third-party, Company
            does not process any personal data.
          </p>
          <p>
            The Services are being autonomously performed on blockchains, which are
            inherently transparent and available to Company and any third parties.
            This includes blockchain addresses, current and historical transactions,
            their volume, prices, and other data and information related to the
            Services.
          </p>
          <p>
            We may use aggregate statistical information about Users’ activity on
            the Site for marketing or any other purpose. The Site may use a browser
            feature called a “cookie” to collect information anonymously and track
            user patterns. A cookie is a small text file containing a unique
            identification number that identifies a customer’s browser, but not the
            customer personally, each time that customer visits a websites using
            cookies. Cookies provide Company with information such as which pages of
            the Site are visited and how many people visited each one. This helps
            enhance visitors’ online experience. Cookies also serve to identify your
            computer so that your preferences can be saved for future visits, and
            Company may work with third parties that use these cookies to help us.
            The use of cookies is an industry standard and many major browsers are
            initially set up to accept them. You can reset your browser to either
            refuse to accept all cookies or to notify you when you have received a
            cookie. However, if you refuse to accept cookies, you may not be able to
            use some of the features available on the Site. We may also use other
            tracking technologies, such as pixel tags or web beacons. Company may
            also use IP addresses to analyze trends, administer the Site, track User
            movements, and gather broad demographic information for aggregate use.
            For systems administration and detecting usage patterns and
            troubleshooting purposes, Company may also automatically log standard
            access information including browser type, access times/open mail, URL
            requested, and referral URL.
          </p>

          <h3>13.6 Communications</h3>
          <p>
            Users with questions, complaints or claims with respect to the Services
            may contact us using the relevant contact information set forth above
            and at <a href="mailto:legal@oasis.app">legal@oasis.app</a>.
          </p>
        </LegalTextLayout>
      </Box>
      <Footer mt="2xl" />
    </Flex>
  );
}

export default Terms;