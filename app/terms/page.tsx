"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText } from "lucide-react"

export default function TermsPage(): React.ReactElement {
  React.useEffect(() => {
    document.body.classList.add('terms-page')
    return () => {
      document.body.classList.remove('terms-page')
    }
  }, [])

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
                <FileText className="h-8 w-8 text-beachside-teal" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-muted-foreground">
                Effective: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="bg-muted p-6 rounded-lg mb-8">
                <p className="font-semibold mb-2">PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY.</p>
                <p className="mb-2">
                  These Terms and Conditions ("Agreement", "Terms", or "Terms of Service") constitute a legal agreement between you and Beachside.
                </p>
                <p className="mb-2">
                  <strong>YOU MAY ONLY USE THE SERVICES IF YOU ARE 18 YEARS OF AGE OR OLDER AND ARE OF LEGAL AGE IN THE JURISDICTION IN WHICH YOU RESIDE TO FORM A BINDING CONTRACT WITH BEACHSIDE.</strong>
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Application of this Agreement</h2>
                <p className="mb-4">
                  This Agreement governs your access to and use of the Technology and Services (each as defined below) and is between you and Beachside ("we", "our", or "us"). Beachside operates an online marketplace and connection platform to connect you with local beach vendors and off-beach merchants, enabling you to locate vendors and order your favorite cold treats and drinks.
                </p>
                <p className="mb-4">
                  Beachside is not a vendor, merchant, retailer, delivery service, or food preparation business. Beachside provides the Services to facilitate the transmission of orders by Users to Vendors and Merchants for pickup at designated locations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Acceptance of this Agreement</h2>
                <p className="mb-4">
                  If you access any of our websites, install or use the Beachside mobile application, install or use any other technology supplied by Beachside (collectively, the "Technology"), access or use any information, function, feature, or service made available or enabled by Beachside (collectively, the "Services", which includes the Technology), click or tap a button or take similar action to signify your affirmative acceptance of this Agreement, or complete the Beachside account registration process, you hereby represent and warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You have read, understand, and agree to be bound by this Agreement and any future amendments and additions to this Agreement as published from time to time;</li>
                  <li>You are of legal age in the jurisdiction in which you reside to form a binding contract with Beachside; and</li>
                  <li>You have the authority to enter into the Agreement personally and, if applicable, on behalf of any organization for whom you have created an account.</li>
                </ul>
                <p className="mb-4">
                  "User" means any individual or other person who accesses or uses the Services with or without an account. Except as otherwise provided in this Agreement, if you do not agree to be bound by the Agreement, you may not access or use the Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Modifications</h2>
                <p className="mb-4">
                  Beachside reserves the right to modify the terms and conditions of this Agreement or its policies relating to the Technology or Services at any time, effective upon posting an updated version of this Agreement. If we make any material changes to this Agreement, we will notify you by email at the email address that you have provided to us or by another means. You should regularly review this Agreement, as your continued use of the Services after any such changes constitutes your agreement to such changes. If you do not agree to this Agreement or any modifications to this Agreement, you should immediately cease using the Technology and Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Additional Terms and Policies</h2>
                <p className="mb-4">
                  By using or accessing the Services, you agree to be bound by this Agreement and acknowledge and agree to the collection, use, and disclosure of your personal information in accordance with Beachside's Privacy Policy, which is incorporated in this Agreement by reference. You also agree to abide by any additional Beachside terms or policies for Users that are published on our website or mobile application.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Rules and Prohibitions</h2>
                <p className="mb-4">Without limiting other rules and prohibitions in this Agreement, by using or accessing the Services, you agree that:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>You will only use or access the Services for lawful purposes and you will not use or attempt to use the Services under false pretenses or for sending or storing any unlawful material or for deceptive or fraudulent purposes.</li>
                  <li>You will only use or access the Services in accordance with all applicable laws, including copyrights, trade secrets, other intellectual property rights, or other rights of any third party.</li>
                  <li>You will not use or attempt to use another User's account, impersonate any person or entity, or forge or manipulate headers or identifiers to disguise the origin of any content transmitted through the Services.</li>
                  <li>You will not use or attempt to use the Services to cause nuisance, annoyance, or inconvenience.</li>
                  <li>The information you provide to us when you register an account or otherwise communicate with us is accurate, you will promptly notify us of any changes to such information, and you will provide us with whatever proof of identity we may reasonably request.</li>
                  <li>You will keep secure and confidential your account password and any other login or identification credentials you use to access the Services.</li>
                  <li>You will use the Technology and Services only for your own use and will not directly or indirectly resell, license, or transfer the Technology, Services, or content displayed through the Services to a third party.</li>
                  <li>You will not use or attempt to use the Services in any way that could damage, disable, overburden, or impair any Beachside server or the networks connected to any Beachside server.</li>
                  <li>You will not attempt to gain unauthorized access to any part of the Technology or the Services and/or to any account, resource, computer system, and/or network connected to any Beachside server.</li>
                  <li>You will not engage in conduct that harms, attempts to harm, or threatens the safety of other Users, Vendors, Merchants, Beachside, Beachside employees, or our community in any way whatsoever.</li>
                  <li>You will not falsely or fraudulently claim that your order or items from your order were missing, incorrect, of poor quality, defective, or never picked up.</li>
                  <li>You will not falsely or fraudulently dispute a credit or debit card charge or initiate or request a chargeback with respect to any charge from Beachside or related to your use of the Beachside platform.</li>
                </ul>
                <p className="mb-4">
                  In the event that we believe or determine that you have breached any of the aforementioned or any other provision of these Terms, we reserve the right to suspend and/or permanently deactivate your account or take other appropriate action at our sole discretion. Engaging in any prohibited use of the Services may result in criminal, civil, and/or administrative penalties, fines, or sanctions against the User.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Vendors and Merchants Are Independent</h2>
                <p className="mb-4">
                  You understand and agree that Beachside provides the Services to connect you with independent Vendors and Merchants that provide the products and services offered through the Services. You acknowledge and agree that Beachside is not a vendor, merchant, retailer, delivery service, or food preparation business, and has no responsibility or liability for the acts or omissions of any Vendor or any Merchant. Vendors and Merchants are the retailers of the products or services offered through the Services.
                </p>
                <p className="mb-4">
                  Beachside provides the Services to facilitate the transmission of orders by Users to Vendors and Merchants for pickup at designated locations. Any pickup times displayed through the Services are purely estimates and do not represent a promise, commitment, or guarantee by Beachside. Beachside will not assess or guarantee the suitability, legality, or ability of any Vendor or Merchant.
                </p>
                <p className="mb-4">
                  You agree that Beachside is not responsible for Vendors' or Merchants' food preparation or product offerings, food or product handling, or the safety of the food or other products, or whether the photographs, images, menu or product listings, catalog, item descriptions, or other menu, product, or catalog information displayed through the Services accurately reflect the goods and services sold by Vendors and/or Merchants.
                </p>
                <p className="mb-4">
                  You agree that the goods that you purchase will be prepared by the Vendor or Merchant you have selected, that title to the goods passes from the Vendor or Merchant to you at the pickup location, and that you will be responsible for picking up your order at the designated location.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">User Account</h2>
                <p className="mb-4">
                  You may be required to register for an account to use parts of the Services. You must provide accurate, current, and complete information during the registration process and at all other times when you use the Services, and to update the information to keep it accurate, current, and complete. You are the sole authorized User of any account you create through the Services. You are solely and fully responsible for all activities that occur under your password or account or through your device.
                </p>
                <p className="mb-4">
                  You agree that you shall monitor your account to prevent use by minors, and you will accept full responsibility for any unauthorized use of your password or your account. You may not authorize others to use your User account, and you may not assign or otherwise transfer your User account to any other person or entity. Should you suspect that any unauthorized party may be using your password or account, you will notify Beachside immediately.
                </p>
                <p className="mb-4">
                  If you provide any information that is untrue, inaccurate, not current, or incomplete, or if Beachside has reasonable grounds to suspect that such information is untrue, inaccurate, not current, or incomplete, Beachside has the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">User Content</h2>
                <p className="mb-4">
                  Beachside may provide you with interactive opportunities through the Services, including, by way of example, the ability to post content on the Beachside platform or otherwise provide to Beachside Ratings and Reviews, Feedback, or other text, photos, images, or audio and video content (collectively, "User Content"). You represent and warrant that you are the owner of, or otherwise have the right to provide, all User Content that you submit, post, and/or otherwise transmit through the Services.
                </p>
                <p className="mb-4">
                  You hereby grant Beachside a perpetual, irrevocable, transferable, fully paid, royalty-free, non-exclusive, worldwide, fully sublicensable right and license to use, copy, display, publish, modify, remove, publicly perform, translate, create derivative works from, distribute, and/or otherwise use the User Content in connection with Beachside's business and in all forms now known or hereafter invented, without notification to and/or approval by you.
                </p>
                <p className="mb-4">
                  Beachside reserves the right in its sole discretion to remove or disable access to any User Content from the Services, suspend or terminate your account at any time, or pursue any other remedy or relief available under equity or law if you post any User Content that violates this Agreement or that we consider to be objectionable for any reason.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Payment Terms</h2>
                <p className="mb-4">
                  <strong>Prices and Charges:</strong> You understand that: (i) the prices for menu or other items displayed through the Services may differ from the prices offered or published by Vendors or Merchants for the same menu or other items; (ii) Beachside has no obligation to itemize its costs, profits, or margins when publishing such prices; and (iii) pricing may change at any time, in the discretion of Beachside or the Vendor or Merchant (depending on which party sets the given price).
                </p>
                <p className="mb-4">
                  You are liable for all transaction taxes (other than taxes based on Beachside's income), including sales tax, use tax, goods and services tax, and other transaction taxes if applicable, on the Services provided under this Agreement. If transaction taxes are applicable, Beachside reserves the right to charge you additional amounts on account of such taxes.
                </p>
                <p className="mb-4">
                  All payments will be processed by Beachside and/or its payments processor, using the preferred payment method designated in your account. If your payment details change, you or your card provider may provide us with updated payment details. We may use these new details or details from other payment methods on file in order to help prevent any interruption to your use of the Services.
                </p>
                <p className="mb-4">
                  <strong>Refunds:</strong> Charges paid by you for completed orders that have been picked up are final and non-refundable. Beachside has no obligation to provide refunds or credits but may grant them gratuitously at Beachside's sole discretion in each case.
                </p>
                <p className="mb-4">
                  <strong>Promotional Offers:</strong> Beachside, at its sole discretion, may make promotional offers with different features and different pricing to any User. These promotional offers are subject to the terms of this Agreement and may be valid only for certain Users as indicated in the offer. You agree that promotional offers: (i) may only be used by the intended audience, for the intended purpose, and in a lawful manner; (ii) may not be duplicated, sold, or transferred in any manner; (iii) are subject to the specific terms that Beachside establishes for such promotional offer; (iv) cannot be redeemed for cash or cash equivalent; and (v) are not valid for use after the date indicated in the offer.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Intellectual Property Ownership</h2>
                <p className="mb-4">
                  Beachside alone (and its licensors, where applicable) shall own all right, title, and interest, including all related intellectual property rights, in and to the Technology and the Services. This Agreement is not a sale and does not convey to you any rights of ownership in or related to the Technology or the Services, or any intellectual property rights owned by Beachside. Beachside names, Beachside logos, and the product names associated with the Technology and Services are trademarks of Beachside or third parties, and no right or license is granted to use them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Indemnification</h2>
                <p className="mb-4">
                  To the extent permitted by law, you agree to indemnify and hold harmless Beachside and its officers, directors, employees, agents, and affiliates from and against any losses, claims, actions, costs, damages, penalties, fines, and expenses, including without limitation, legal and/or attorneys' fees and expenses, that may be incurred arising out of, relating to, or resulting from (a) your User Content; (b) your misuse of the Technology or Services; (c) your breach of this Agreement or any representation, warranty, condition, or covenant in this Agreement; or (d) your violation of any applicable laws, rules, or regulations through or related to the use of the Technology or Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Disclaimer of Warranties</h2>
                <p className="mb-4">
                  YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF THE TECHNOLOGY AND SERVICES IS ENTIRELY AT YOUR OWN RISK. CHANGES ARE PERIODICALLY MADE TO THE TECHNOLOGY AND SERVICES AND MAY BE MADE AT ANY TIME WITHOUT NOTICE TO YOU. THE TECHNOLOGY AND SERVICES ARE PROVIDED ON AN "AS IS" BASIS WITHOUT GUARANTEES, WARRANTIES, OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, GUARANTEES, WARRANTIES, OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR OR GENERAL PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p className="mb-4">
                  BEACHSIDE DOES NOT WARRANT THAT THE TECHNOLOGY OR SERVICES WILL OPERATE ERROR-FREE OR THAT THE TECHNOLOGY OR SERVICES ARE FREE OF COMPUTER VIRUSES AND OTHER HARMFUL MALWARE. IF YOUR USE OF THE TECHNOLOGY OR SERVICES RESULTS IN THE NEED FOR SERVICING OR REPLACING EQUIPMENT OR DATA, BEACHSIDE SHALL NOT BE RESPONSIBLE FOR THOSE ECONOMIC COSTS.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Limitation of Liability</h2>
                <p className="mb-4">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BEACHSIDE'S AGGREGATE LIABILITY SHALL NOT EXCEED THE GREATER OF AMOUNTS ACTUALLY PAID BY AND/OR DUE FROM YOU TO BEACHSIDE IN THE SIX (6) MONTH PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO SUCH CLAIM.
                </p>
                <p className="mb-4">
                  TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, BEACHSIDE SHALL NOT BE LIABLE TO YOU OR ANYONE ELSE FOR ANY INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL, OR OTHER DAMAGES OF ANY TYPE OR KIND (INCLUDING PERSONAL INJURY, LOST PROFITS, PAIN AND SUFFERING, EMOTIONAL DISTRESS, AND LOSS OF DATA, REVENUE, USE, AND ECONOMIC ADVANTAGE).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Termination</h2>
                <p className="mb-4">
                  If you violate this Agreement, Beachside may respond based on a number of factors including, but not limited to, the egregiousness of your actions and whether a pattern of harmful behavior exists.
                </p>
                <p className="mb-4">
                  In addition, at its sole discretion, Beachside may modify or discontinue the Technology or Services, or may modify, suspend, or terminate your access to the Technology or the Services, for any reason, with or without notice to you and without liability to you or any third party. In addition to suspending or terminating your access to the Technology or the Services, Beachside reserves the right to take appropriate legal action, including without limitation, pursuing civil, criminal, or injunctive redress.
                </p>
                <p className="mb-4">
                  Even after your right to use the Technology or the Services is terminated, this Agreement will remain enforceable against you. All provisions which by their nature should survive to give effect to those provisions shall survive the termination of this Agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">General</h2>
                <p className="mb-4">
                  <strong>Choice of Law:</strong> This Agreement is governed by the laws of the State of Wyoming, United States, without giving effect to any principles that provide for the application of the law of any other jurisdiction.
                </p>
                <p className="mb-4">
                  <strong>Severability:</strong> If any provision of this Agreement is found to be invalid or unenforceable under applicable law, the invalidity or unenforceability of such provision shall not affect the validity or enforceability of the remaining provisions of this Agreement, which shall remain in full force and effect.
                </p>
                <p className="mb-4">
                  <strong>No Waiver:</strong> Unless otherwise required by law, any delay or failure of either party to enforce or insist upon strict compliance with any provision of this Agreement or assert or exercise any right, power, or privilege under any provision of this Agreement shall not be construed as a waiver of such provision.
                </p>
                <p className="mb-4">
                  <strong>Entire Agreement:</strong> This Agreement is the final, complete, and exclusive agreement of the parties with respect to the subject matter hereof and supersedes and merges all prior discussions between the parties with respect to such subject matter.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4 text-beachside-teal">Contact Information</h2>
                <p className="mb-4">
                  Beachside welcomes your questions or comments regarding this Agreement. Please contact us at:
                </p>
                <div className="bg-muted p-6 rounded-lg mb-4">
                  <p className="font-semibold mb-2">Beachside</p>
                  <p className="mb-1">Attn: Legal</p>
                  <p className="mb-1">Email: legal@beachside.com</p>
                  <p className="mb-1">Customer Support: support@beachside.com</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

