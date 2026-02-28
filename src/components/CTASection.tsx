import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";
import Stepper, { Step } from "@/components/Stepper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export const CTASection = () => {
  const { toast } = useToast();
  const [stepperKey, setStepperKey] = useState(0);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);

  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim());
  }, [formData.email]);

  const canProceed = useMemo(() => {
    if (currentStep === 1) return formData.name.trim().length > 1;
    if (currentStep === 2) return isEmailValid;
    if (currentStep === 3) return formData.phone.trim().length >= 8;
    if (currentStep === 4) return formData.message.trim().length > 0;
    return true;
  }, [currentStep, formData.name, formData.phone, formData.message, isEmailValid]);

  const handleFinalStepCompleted = () => {
    toast({
      title: "Message sent!",
      description: `Thanks ${formData.name || "there"}, we'll get back to you within 24 hours.`,
    });
    setFormData(initialFormData);
    setCurrentStep(1);
    setStepperKey((prev) => prev + 1);
  };

  return (
    <section id="contact" className="section-padding bg-[#F9FAFB]">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          className="mx-auto max-w-4xl rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm md:p-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[#111111] sm:text-4xl md:text-5xl">
              Let&apos;s <span className="text-[#7C3AED]">Harmonize</span> Your Business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#6B7280] md:text-lg">
              Ready to transform your business reality? Reach out to us and let&apos;s create your
              success story together.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <Stepper
              key={stepperKey}
              initialStep={1}
              onStepChange={setCurrentStep}
              onFinalStepCompleted={handleFinalStepCompleted}
              backButtonText="Previous"
              nextButtonText="Next"
              disableStepIndicators
              stepCircleContainerClassName="rounded-2xl border border-[#E5E7EB] bg-white shadow-none"
              stepContainerClassName="px-6 pt-5 pb-4"
              contentClassName="px-0"
              footerClassName="px-6 pb-6"
              nextButtonProps={{
                disabled: !canProceed,
                className: `next-button ${!canProceed ? "cursor-not-allowed opacity-50" : ""}`,
              }}
              backButtonProps={{ className: "back-button" }}
            >
              <Step>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-[#111111]">What is your name?</h3>
                  <p className="text-sm text-[#6B7280]">Let&apos;s start with your name.</p>
                  <Input
                    value={formData.name}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        name: event.target.value,
                      }))
                    }
                    placeholder="John Doe"
                    className="h-12 border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#9CA3AF] focus-visible:border-[#7C3AED] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </Step>

              <Step>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-[#111111]">What is your email?</h3>
                  <p className="text-sm text-[#6B7280]">We&apos;ll use this to send your strategy response.</p>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: event.target.value,
                      }))
                    }
                    placeholder="john@example.com"
                    className="h-12 border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#9CA3AF] focus-visible:border-[#7C3AED] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </Step>

              <Step>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-[#111111]">What is your phone number?</h3>
                  <p className="text-sm text-[#6B7280]">So our team can contact you quickly.</p>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: event.target.value,
                      }))
                    }
                    placeholder="+91 98765 43210"
                    className="h-12 border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#9CA3AF] focus-visible:border-[#7C3AED] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </Step>

              <Step>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-tight text-[#111111]">Your message</h3>
                  <p className="text-sm text-[#6B7280]">Tell us briefly about your requirement.</p>
                  <Textarea
                    value={formData.message}
                    onChange={(event) =>
                      setFormData((prev) => ({
                        ...prev,
                        message: event.target.value,
                      }))
                    }
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="resize-none border-[#E5E7EB] bg-white text-[#111111] placeholder:text-[#9CA3AF] focus-visible:border-[#7C3AED] focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </Step>
            </Stepper>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
