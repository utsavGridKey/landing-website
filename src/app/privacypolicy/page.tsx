import { DotIcon } from "lucide-react";

const PrivacyPolicy = () => {
  const policyData = [
    {
      title:
        "GRIDKEY will at times be required to collect Personal Information from Users for the following purposes:",
      children: [
        "The processing of Your/User's name and contact information to provide You/User with access to Gridkey Software and Gridkey Services and to respond to requests made by You/User.",
        "The processing of device and usage data to improve and customize Gridkey Software, Gridkey Services and/or Gridkey Websites and to provide better performance, security and continued proper functioning.",
        "The processing of Your/User's billing information to complete transactions with You/User when You/User purchases Gridkey Software and/or Gridkey Services",
        "To display personalized advertisements to You/User and to send marketing communications about GRIDKEY, Gridkey Software and/or Gridkey Services to You/User",
        "To comply with GRIDKEY's legal obligations under applicable laws, cooperate with public and government authorities, resolve disputes and address complaints",
        "To improve the responsiveness of Gridkey Software, Gridkey Services and/or Gridkey Websites, in which case Gridkey may use Cookies or other similar electronic tools",
      ],
    },
    {
      title:
        "GRIDKEY may be required to share Personal Information collected from Users with the following parties:",
      children: [
        "GRIDKEY's Payment Gateway or Services providers for the purpose of payment processing.",
        "In individual instances, professional advisers who provide consultancy, banking, legal, insurance or accounting services, if GRIDKEY is involved in a merger, reorganization, asset sale or business combination.",
        "Google for purposes of the implementation of Google's reCAPTCHA v3 on Gridkey websites. reCAPTCHA v3 collects Personal Information from Users who visit Gridkey Websites, to make a determination of whether the Users are human and not a bot. Your/User's use of reCAPTCHA v3 on Gridkey Websites is subject to Google's Privacy Policy and Google's Terms of Use.",
        "Applicable to Users in the European Union: You/User have the right to be informed how and why Your/User's data is being processed, and the right to be informed in the event that Your/User's data is being processed for purposes other than those that are stated. You/User can contact GRIDKEY at support@gridkey.in for any such inquiries.You/User have the right to request that GRIDKEY should delete any personal information pertaining to You/User. GRIDKEY will process your request within one month from receiving the request for erasing Your/User's data and/or consent. You/User can contact GRIDKEY at support@gridkey.in for any such requests.",
        "Applicable to Users in the European Union: You/User have the right to request that GRIDKEY should delete any personal information pertaining to You/User. GRIDKEY will process your request within one month from receiving the request for erasing Your/User's data and/or consent. You/User can contact GRIDKEY at support@gridkey.in for any such requests.",
      ],
    },
    {
      title: "General Information:",
      children: [
        "GRIDKEY may use cookies to improve responsiveness and relevance of Gridkey Websites for its Users, as well as cookies from third-party Advertising platforms including but not limited to those operated by Google, Inc. (Google AdWords), Facebook, Inc. (Facebook Ads) and Times Internet (Colombia ad platform) for marketing purposes. Such cookies store anonymised (not personally identifiable) data from Users who visit Gridkey Websites. GRIDKEY may use information collected by cookies to serve You/User more relevant advertisements. Cookies allow GRIDKEY to display GRIDKEY promotional materials on other sites You/User may visit across the Internet (referred to as “Remarketing” by Google AdWords across the Google Display Network, or “Retargeting” by other platforms).",
        "GRIDKEY also employs Google Analytics, a web-based tool from Google, Inc., on Gridkey Websites. Google Analytics uses cookies on Gridkey Websites that collect usage and behavioural information from visitors of Gridkey Websites. Cookies thus help GRIDKEY optimize its services and make them more user-oriented. The information processed by Google Analytics cookies is anonymised to make sure that personal identification is not possible.",
        "You/User retain the right to disable cookies in your browser settings, but by doing so, You/User will not be guaranteed that GRIDKEY will be able to provide full service and functionality of Gridkey Software, Gridkey Services and/or Gridkey Websites to You/User.",
        "You/User have the option of downloading and installing a browser plug-in to prevent Google Analytics from using your data. This plug-in is the Google Analytics Opt-out Browser Add-on and You/User can learn how to get it by clicking the following link: https://tools.google.com/dlpage/gaoptout. Again, by installing the aforementioned browser plug-in, You/User will not be guaranteed that GRIDKEY will be able to provide full service and functionality of Gridkey Software, Gridkey Services and/or Gridkey Websites to You/User.",
        "If You/User provide feedback via posts, comments, messages, blogs etc. available on Gridkey Websites or social platforms like Facebook, LinkedIn, Twitter etc. about Gridkey Software, Gridkey Services and/or Gridkey Websites or the content contained in Gridkey Software, Gridkey Services and/or Gridkey Websites, GRIDKEY may retain the information disclosed as may be necessary for marketing purposes, to provide customer support, to resolve troubleshoot problems or for any other purpose consistent with the Privacy Policy. Any such feedback provided by You/User will be collected by Gridkey and will not be considered as Personal Information subject to this Privacy Policy.",
        "GRIDKEY may list the names and/or logos of Paid Users (GRIDKEY Clients) on Gridkey Websites solely for promoting the GRIDKEY brand. No other Personal Information of Users will be listed on Gridkey Websites. You/User can exercise Your/User's right to object at any time to such processing without having to provide any specific reason for such objection.",
        "In the unlikely event that Gridkey Software, Gridkey Services or Gridkey Websites have a temporary glitch and Personal Information of Users is displayed publicly even though they have configured their preferences otherwise, there will be no liability against GRIDKEY for the same. GRIDKEY will do its best to work with the affected Users if these types of situations arise, but the sole remedy in these cases is to have GRIDKEY try to rectify the problem as soon as it can.",
        "GRIDKEY reserves the right to make any changes/modifications in the Privacy Policy at any time, as it deems appropriate.",
        "GRIDKEY requires all Users to read and agree to the Terms of Use establishing the use, disclaimers and limitations of liability governing the use of Gridkey Software, Gridkey Services and Gridkey Websites at GRIDKEY's Terms of Use.",
        "Any questions or clarifications with respect to the Privacy Policy can be sent to support@gridkey.in",
      ],
    },
  ];

  const additionPoints = [
    "Agreement",
    "You/User",
    "Gridkey Software",
    "Gridkey Services",
    "Gridkey Websites",
    "Trial Period",
    "Subscription Charges",
    "Free User",
    "Trial User",
    "Paid User",
    "Users",
    "Third Party Software &/or Open Source",
  ];
  return (
    <div className="py-24 bg-[#111] flex items-center justify-center flex-col">
      <p className="self-stretch text-center justify-start text-3xl font-normal font-['Inter'] leading-10 text-white py-6">
        Privacy Policy
      </p>
      <div className="max-w-[784px] flex justify-center flex-col items-center  bg-[#111] gap-6">
        <p style={{ textAlign: "justify", color: "#999999" }}>
          {`This privacy policy (hereinafter referred to as “Privacy Policy”) is with respect to the use, protection and sharing of any Personal Information (as defined in the Privacy Policy) for Users (as defined in GRIDKEY's Terms of Use) of Gridkey Software (as defined in GRIDKEY's Terms of Use), Gridkey Services (as defined in GRIDKEY's Terms of Use) and Gridkey Websites (as defined in GRIDKEY's Terms of Use). Users may be required to provide Personal Information (as defined in the Privacy Policy). Users of Gridkey Software, Gridkey Services and Gridkey Websites consent to all terms in the Privacy Policy as well as the terms of the Payment Gateway or Payment Services provided by GRIDKEY or any third party Payment Service Provider(s) in connection thereto.`}
        </p>
        <p style={{ textAlign: "justify", color: "#999999" }}>
          {`The Privacy Policy is subject to change at any time without notice. To ensure that you are aware of the changes, please view the Privacy Policy periodically. `}
        </p>
        <p
          style={{
            textAlign: "justify",
            fontWeight: 600,
            fontSize: 32,
            color: "#fff",
          }}
        >
          Definitions:
        </p>
        <p
          style={{
            textAlign: "justify",
            fontWeight: 600,
            fontSize: 20,
            color: "#fff",
          }}
        >
          Personal Information:
        </p>
        <p style={{ textAlign: "justify", color: "#999999" }}>
          {`Any information/data disclosed by You/User (as defined in GRIDKEY's Terms of Use) by which You/User stands to be identified which includes, but is not limited to names, addresses, zip codes, postal codes, email addresses, company names, company logos, GSTIN, telephone numbers and mobile numbers.`}
        </p>
        <p
          style={{
            textAlign: "justify",
            fontWeight: 600,
            fontSize: 20,
            color: "#fff",
          }}
        >
          Cookies
        </p>
        <p style={{ textAlign: "justify", color: "#999999" }}>
          {`Small text files created by a website that are stored in Your/User's computer hard disk. Cookies provide a way for the website to recognize You/User and to keep track of Your/User's preferences. Cookies allow the website to tailor its pages and create a custom experience for You/User.`}
        </p>
        <p style={{ textAlign: "justify", color: "#999999" }}>
          {`In addition to the definitions defined above in the Privacy Policy, all Definitions defined in Definition - Clause 1 of GRIDKEY's Terms of Use are also applicable to You/User when used in the Privacy Policy. Definitions from GRIDKEY's Terms of Use applicable in the Privacy Policy include but are not limited to:`}
        </p>
        <ol>
          {additionPoints?.map((childData, index) => {
            return (
              <li key={childData} style={{ padding: "2px", color: "#ddd" }}>
                <p style={{ textAlign: "justify" }} className="flex">
                  {index + 1}. {childData}
                </p>
              </li>
            );
          })}
        </ol>
        <p
          style={{
            textAlign: "justify",
            fontWeight: 600,
            fontSize: 32,
            color: "#fff",
          }}
        >
          Terms of privacy policy:{" "}
        </p>
        {policyData?.map((dataItem, index) => {
          return (
            <>
              <p
                style={{
                  textAlign: "justify",
                  fontWeight: 600,
                  fontSize: 20,
                  color: "#fff",
                }}
              >
                {`${index + 1}. ${dataItem.title}`}{" "}
              </p>
              <li>
                {dataItem?.children?.map((childData) => {
                  return (
                    <li key={childData}>
                      <p
                        className="flex"
                        style={{ textAlign: "justify", color: "#999" }}
                      >
                        <DotIcon width={20} height={20} />
                        {childData}
                      </p>
                    </li>
                  );
                })}
              </li>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
