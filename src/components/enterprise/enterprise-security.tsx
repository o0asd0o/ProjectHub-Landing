import { Shield, CheckCircle2 } from "lucide-react";

const SECURITY_FEATURES = [
  "SOC 2 Type II Certified",
  "GDPR Compliant",
  "HIPAA Compliant",
  "ISO 27001 Certified",
  "256-bit AES Encryption",
  "SSO & SAML 2.0",
  "Two-Factor Authentication",
  "Custom Data Retention",
  "IP Allowlisting",
  "Audit Logs",
  "Data Residency Options",
  "Penetration Testing",
];

const EnterpriseSecurity: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-20 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-0">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Shield size={16} />
            Enterprise Security
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold mb-6 leading-tight">
            Security and Compliance{" "}
            <span className="text-[#3b68ff]">You Can Trust</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
            ProjectHub is built with security at its core. We maintain the
            highest standards of data protection and compliance to ensure your
            organization&apos;s sensitive information is always protected.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Our security team continuously monitors for threats and conducts
            regular third-party audits to maintain our certifications and your
            peace of mind.
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-[#f9f9f9] rounded-2xl p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-bold mb-6">
              Security & Compliance Certifications
            </h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {SECURITY_FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm md:text-base"
                >
                  <CheckCircle2
                    className="text-green-500 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSecurity;
