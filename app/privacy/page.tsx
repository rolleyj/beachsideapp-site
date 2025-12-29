"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield } from "lucide-react"

export default function PrivacyPage(): React.ReactElement {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-20 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl"
          >
            <div className="mb-12 text-center">
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-beachside-teal/10">
                <Shield className="h-8 w-8 text-beachside-teal" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                Beachside Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Introduction</h2>
                <p className="mb-4">
                  At Beachside, we connect beachgoers with local beach vendors and off-beach merchants, enabling convenient access to favorite cold treats, drinks, and beach essentials.
                </p>
                <p className="mb-4">
                  This Privacy Policy ("Policy") describes how Beachside ("we", "our", or "us") collects, processes, retains, and discloses your Personal Information when providing our services, including our website, mobile applications, and any platform or application that contains or includes a link to this Policy (collectively the "Services").
                </p>
                <p className="mb-4">
                  This Policy does not apply to vendors, merchants, or contractors, which are subject to separate privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">What Personal Information does Beachside collect or process?</h2>
                <p className="mb-4">
                  Personal Information is any information that Beachside can reasonably use to identify you, whether that information identifies you on its own or when combined with other information. Anonymous information and information that has been de-identified such that it cannot identify you is not Personal Information.
                </p>
                <p className="mb-4">We may process the following categories of Personal Information in connection with our Services:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Contact Information</strong>, including name, address (such as delivery address or beach location), email address(es), phone number(s), and other contact information provided to us.</li>
                  <li><strong>Account and Profile Information</strong>, including username and credentials, privacy settings and notification preferences, pictures, and other information you add to your Beachside profile.</li>
                  <li><strong>Communications with Beachside and Vendors</strong>, including the content of in-app messages with vendors, communications with merchants through or in-connection with our Services, SMS/text messages, chats, phone calls, and emails with us related to our Services, customer support inquiries and outreach.</li>
                  <li><strong>Content you create or share</strong>, including reviews about experiences on our platform, such as ratings of vendors or merchants you order from, or photos you upload.</li>
                  <li><strong>Payment Information</strong>, including credit card or debit card information and information about the payment methods and services used to make purchases on or through our Services. Payment information is primarily stored and processed by our third-party service providers, including our payment processors.</li>
                  <li><strong>Activity and Transactions on or with our Services</strong>, including information about the items and products ordered, order history, items placed in the cart, special instructions included in an order (e.g., dietary preferences, delivery preferences), transaction amounts, promotional codes and discounts used and received, the vendors and merchants ordered from, the features and functionality used or interacted with, searches and actions on our Services.</li>
                  <li><strong>Geolocation Information</strong>, if you have consented by enabling location access, we may receive and store your precise location information to facilitate order pickups and to show you nearby vendors. You may use our Services without enabling the collection of precise location information from your device; however, this may impact your experience including the accuracy of vendor locations and order pickup points.</li>
                  <li><strong>Device Information</strong>, including information about the computers, phones, and other devices you use to interact with Beachside or our Services, internet-protocol address, device-based identifiers, operating system and version, preferred language, hardware model identifiers, browser information including type and settings, and other device information.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">How does Beachside collect or receive Personal Information?</h2>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>From Users of our Services:</strong> We receive information from users of our Services, such as during account or profile creation and updating, placing an order, participation in surveys, creating or posting content such as photos or reviews, contacting us, or signing up for additional Services or programs.</li>
                  <li><strong>Automatically Through Our Services:</strong> When you use our Services, certain Personal Information is collected automatically from your device and browser.</li>
                  <li><strong>Through Cookies and Similar Technologies:</strong> Cookies are small text files that are placed on your device, commonly through your browser, and that are used to record information such as settings. Depending on your settings, certain of our Services, including our website, may receive information about you from or through cookies or similar technologies.</li>
                  <li><strong>From our Service Providers:</strong> We may receive Personal Information from service providers whom we engage to perform services on our behalf, including communication services providers (e.g., email, SMS/text message, etc.), payment providers and processors, market research services providers, and those that provide us with marketing, advertising, analytics, security, and fraud services.</li>
                  <li><strong>From Vendors and Merchants:</strong> We may receive Personal Information from vendors and merchants in connection with orders placed through our Services.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">How does Beachside use Personal Information?</h2>
                <p className="mb-4">Depending on which Services you use and how you interact with us, Beachside may use your Personal Information:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>To Provide and Customize Beachside Services</strong>, including allowing you to place and pay for orders, facilitating the orders you place on or through our Services, recommending and ranking vendors based on your searches, location, reviews and order history, displaying reviews, photos and other content you post publicly, and customizing your experience.</li>
                  <li><strong>To Provide Customer Support</strong>, including by exchanging communications, investigating, analyzing, and remediating support issues including as it relates to order pickups, evaluating our customer support and making improvements.</li>
                  <li><strong>To Develop, Analyze, and Improve our Services</strong>, including debugging or troubleshooting our Services, understanding how you and other customers use our Services and your preferences, improving the Services, and developing new Services or initiatives.</li>
                  <li><strong>To Advertise and Promote Beachside and our Services</strong>, including displaying advertising related to our Services or vendors on our Services and on third-party websites and platforms, improving, developing and implementing marketing campaigns, and showing you ads that are most relevant to you about Beachside and our vendors.</li>
                  <li><strong>To Allow and/or Facilitate Communications with Beachside, Vendors and Merchants</strong>, including communications about our Services, Service updates, orders and account, changes to our terms and policies.</li>
                  <li><strong>For Authentication, Integrity, Security, Quality and Safety</strong>, including verifying your account and identity as applicable to our Services, providing a secure payment and shopping experience, to detect, investigate, and prevent malicious or illegal conduct, bugs, malware, fraudulent activity, and any other actions we deem necessary to protect your safety and security.</li>
                  <li><strong>For Legal Reasons and Policy Compliance</strong>, including to comply with our obligations under applicable law and to respond to valid legal process, to enforce or investigate potential or actual violations of our terms, policies or other legal agreements, and to perform audits and assessments.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Beachside's disclosure of Personal Information</h2>
                <p className="mb-4">Depending on which Beachside Services you use or interact with, Beachside may provide or disclose Personal Information as follows:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>To Service Providers:</strong> To enable us to meet our business operations needs and to perform our Services, we may provide Personal Information to our service providers and vendors, including providers of cloud services, payment services, marketing and advertising services, analytics services, location and mapping services, and customer support functions.</li>
                  <li><strong>To Vendors:</strong> To facilitate the pickup of your orders, we disclose some information to vendors, such as recipient's name, pickup location information, order information (which may include information on products purchased), and user instructions.</li>
                  <li><strong>To Merchants:</strong> We disclose Personal Information to merchants in connection with the Services including for the preparation of the order and facilitating the pickup.</li>
                  <li><strong>Publicly:</strong> We display content and information that you share publicly, such as reviews about vendors or photos of things you have ordered, so that others can read and learn about your experiences with vendors on our platform.</li>
                  <li><strong>To Marketing and Advertising Partners:</strong> We may use third-party marketing and advertising partners to deliver advertising to you on behalf of Beachside and/or our vendors.</li>
                  <li><strong>For Actual or Potential Corporate Transactions:</strong> If we are involved in strategic transactions including any sale, merger, acquisition, joint venture, assignment, transfer, reorganization, bankruptcy or receivership, we may disclose your Personal Information in the diligence process and transferred to a successor or affiliate as part of that transaction.</li>
                  <li><strong>To Government Authorities or where Legally Required or Permitted:</strong> We and our service providers may share your Personal Information with third parties such as government authorities if legally required or permitted, or as necessary to enforce our agreements, prevent fraud, or protect the rights, property, or safety of our business, employees, vendors, customers, or other persons or parties.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Your Privacy Rights and Choices</h2>
                <p className="mb-4">We offer you tools and processes to manage and make choices regarding your Personal Information. Depending on your jurisdiction, and subject to certain exceptions, exemptions, and restrictions, you may exercise the following rights:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Access/Portability:</strong> You may have the right to request access to your Personal Information and receive it in a portable and machine-readable format.</li>
                  <li><strong>Deletion:</strong> You may have the right to ask us to delete your Personal Information, including your Beachside account, although this may impact your ability to use the Services.</li>
                  <li><strong>Correction:</strong> You may have the right to correct, rectify, or update inaccurate Personal Information that we hold about you.</li>
                  <li><strong>Opt-Out of Sale or Sharing:</strong> You have the right to opt-out of our selling or sharing (for purposes of targeted advertising) of your Personal Information.</li>
                </ul>
                <p className="mb-4">
                  If you have a Beachside account, you can exercise certain of your rights directly through your account. To exercise your rights or if you have questions, please contact us at the information provided in the "How to Contact Us" section below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Security and Retention</h2>
                <p className="mb-4">
                  We use commercially reasonable administrative, organizational, technical and physical security controls to protect your Personal Information from unauthorized access, modification, disclosure, or destruction. However, we are not able to guarantee that your Personal Information is absolutely secure, since no Internet or email transmission is ever fully secure or error free.
                </p>
                <p className="mb-4">
                  We retain your Personal Information for only as long as required to provide our Services to you and engage in the uses described in this Policy, unless a different retention period is required by applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Cross-Border Transfers of Personal Information</h2>
                <p className="mb-4">
                  The Personal Information processed in connection with this Policy may be stored and processed on systems and servers located outside of the jurisdiction where you live, including storing, accessing, and processing the Personal Information in the United States and other global locations whose data protection laws may differ from those where you live.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Personal Information from Children</h2>
                <p className="mb-4">
                  Our Services are not intended for individuals under the age of 18. Therefore, we do not knowingly process Personal Information from individuals under 18 years old. If a parent or legal guardian of a child under 18 believes that we have collected Personal Information from or about such an individual, please contact us at the information provided in the "How to Contact Us" section below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Third-Party Sites</h2>
                <p className="mb-4">
                  Our Services may link to other third-party websites that are not controlled by Beachside. These third parties are not under our control and we are not responsible for their privacy policies or practices. If you provide any Personal Information to any third party or through any such third-party websites, it will be subject to the privacy policies and practices of that third party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">How to Contact Us</h2>
                <p className="mb-4">
                  For questions or concerns related to this Policy, please contact us at:
                </p>
                <div className="bg-muted p-6 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Beachside</p>
                  <p className="mb-1">Attn: Privacy</p>
                  <p className="mb-1">Email: privacy@beachside.com</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Changes to this Privacy Policy</h2>
                <p className="mb-4">
                  We may update this Policy periodically to account for changes in how we collect and process your Personal Information. To the extent any of these changes are material, we will provide notice and/or obtain consent where expressly required by law. Any updates to this Policy will apply to the collection and processing of Personal Information after the "Last Updated" date at the top.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

