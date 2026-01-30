"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Background } from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  keyDetails,
  schedule,
  prizes,
  judgingCriteria,
  eligibleDomains,
  faqItems,
  getStartedSteps,
} from "@/data/hackathon";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Github,
  FileVideo,
  Presentation,
  Globe,
  Handshake,
  Megaphone,
  Users2,
  Sparkles,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function SectionHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-center mb-12"
    >
      <motion.div variants={itemVariants}>
        <Badge
          variant="outline"
          className="mb-4 border-orange-500/30 text-orange-400 bg-orange-500/10"
        >
          {badge}
        </Badge>
      </motion.div>
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className="text-muted max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Background />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 }}
        className="absolute inset-0 flex items-center justify-center z-[1] -translate-y-12"
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 lg:w-96 lg:h-96 blur-3xl bg-orange-400/30 rounded-full" />
        </div>
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/orangeLogo.webp"
            alt="Hackathon Mascot"
            width={400}
            height={500}
            className="w-auto h-[45vh] max-h-[350px] lg:h-[50vh] lg:max-h-[450px] object-contain opacity-20"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <Badge
            variant="outline"
            className="border-orange-500/50 text-orange-400 bg-orange-500/10"
          >
            13th Annual • April 10-12, 2026
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
        >
          <span className="text-orange-400">MIT BITCOIN</span>
          <br />
          <span className="text-foreground">HACKATHON</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 text-xl md:text-2xl font-medium text-orange-400/80"
        >
          Freedom for All
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-muted max-w-xl mx-auto"
        >
          36 hours to learn, build, and ship the next generation of Bitcoin and
          blockchain applications. In-person at MIT Campus.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-row gap-3 sm:gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base px-4 sm:px-6"
            asChild
          >
            <Link href="https://devpost.com" target="_blank">
              Register on Devpost
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-500/30 hover:bg-orange-500 hover:text-white hover:border-orange-500 text-sm sm:text-base px-4 sm:px-6"
            asChild
          >
            <Link href="#sponsors">
              Sponsor Us?
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}

function KeyDetailsSection() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {keyDetails.map((detail) => (
            <motion.div
              key={detail.label}
              variants={cardVariants}
              className="bg-surface border border-border rounded-xl p-4 text-center hover:border-orange-500/30 transition-colors"
            >
              <detail.icon className="h-6 w-6 mx-auto mb-2 text-orange-400" />
              <p className="text-sm text-muted mb-1">{detail.label}</p>
              <p className="font-semibold">{detail.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="About"
          title="Build the Future of Bitcoin"
          description="Join the most prestigious Bitcoin hackathon of the year"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 text-muted"
        >
          <motion.p variants={itemVariants} className="text-lg">
            The cryptocurrency space needs you to develop the next generation of
            projects, applications, and features. In the spirit of MIT, this is a
            unique hackathon where you&apos;ll have{" "}
            <span className="text-orange-400 font-medium">36 hours</span> to
            learn, share, and build a remarkable project that may be the next big
            thing to scale this space.
          </motion.p>

          <motion.p variants={itemVariants}>
            With interactive workshops, mentorship sessions, and a collaborative
            atmosphere, it&apos;s the perfect environment to learn, build, and make
            meaningful connections — no matter your experience level.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 pt-6"
          >
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                🆕 New to Crypto?
              </h3>
              <p className="text-sm">
                No worries! This event is beginner-friendly with workshops to get
                you started.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                💻 Experienced Dev?
              </h3>
              <p className="text-sm">
                Challenge yourself at one of the most prestigious Bitcoin
                hackathons.
              </p>
            </div>
            <div className="bg-surface border border-border rounded-xl p-6">
              <h3 className="font-semibold text-foreground mb-2">
                🤔 Just Curious?
              </h3>
              <p className="text-sm">
                Join us to learn more about crypto. The fun is guaranteed!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function GetStartedSection() {
  return (
    <section className="py-20 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="How It Works"
          title="Get Started"
          description="Five simple steps to join the hackathon"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-8">
            {getStartedSteps.map((step, index) => (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Step number */}
                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                  {step.step}
                </div>

                {/* Content */}
                <div
                  className={`flex-1 bg-surface border border-border rounded-xl p-6 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ScheduleSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Timeline"
          title="Event Schedule"
          description="36 hours of hacking, learning, and building"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Tabs defaultValue="friday" className="w-full">
            <motion.div variants={itemVariants}>
              <TabsList className="w-full justify-start bg-surface border border-border mb-8 p-1">
                {schedule.map((day) => (
                  <TabsTrigger
                    key={day.day.toLowerCase()}
                    value={day.day.toLowerCase()}
                    className="flex-1 data-[state=active]:bg-orange-500 data-[state=active]:text-white"
                  >
                    <span className="hidden sm:inline">{day.day}</span>
                    <span className="sm:hidden">{day.day.slice(0, 3)}</span>
                    <span className="ml-2 text-xs opacity-70">{day.date}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </motion.div>

            {schedule.map((day) => (
              <TabsContent key={day.day.toLowerCase()} value={day.day.toLowerCase()}>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-3"
                >
                  {day.events.map((event, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                        event.isHighlight
                          ? "bg-orange-500/10 border-orange-500/30"
                          : "bg-surface border-border"
                      }`}
                    >
                      <span
                        className={`font-mono text-sm w-28 flex-shrink-0 ${
                          event.isHighlight ? "text-orange-400" : "text-muted"
                        }`}
                      >
                        {event.time}
                      </span>
                      <span
                        className={`font-medium ${
                          event.isHighlight ? "text-orange-400" : "text-foreground"
                        }`}
                      >
                        {event.title}
                      </span>
                      {event.isHighlight && (
                        <Badge className="ml-auto bg-orange-500/20 text-orange-400 border-orange-500/30">
                          Key Event
                        </Badge>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

function TracksSection() {
  return (
    <section className="py-20 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Tracks"
          title="What to Build"
          description="Your project must be related to Bitcoin, blockchain, or cryptocurrency"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {eligibleDomains.map((domain) => (
            <motion.div
              key={domain.name}
              variants={cardVariants}
              className="bg-background border border-border rounded-xl p-6 hover:border-orange-500/30 transition-colors group"
            >
              <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-400 transition-colors">
                {domain.name}
              </h3>
              <p className="text-muted text-sm">{domain.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-muted text-sm mt-8"
        >
          Sponsor challenge tracks will be announced closer to the event.
        </motion.p>
      </div>
    </section>
  );
}

function SubmissionSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Submissions"
          title="What to Submit"
          description="Make sure to include all required materials for judging"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6"
        >
          <motion.div
            variants={cardVariants}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Presentation className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">Slide Deck</h3>
            </div>
            <p className="text-muted text-sm">
              A short presentation with your project motivation, description, story,
              and technology stack.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Github className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">GitHub Repository</h3>
            </div>
            <p className="text-muted text-sm">
              With proper commit history showing work done during the hackathon
              period.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <FileVideo className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">Demo Video</h3>
            </div>
            <p className="text-muted text-sm">
              A 3-5 minute video demonstrating your project in action.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-surface border border-border rounded-xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Globe className="h-5 w-5 text-orange-400" />
              </div>
              <h3 className="font-semibold">Live Application</h3>
            </div>
            <p className="text-muted text-sm">
              Optional: Link to a live application with access credentials if needed.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 p-6 bg-orange-500/10 border border-orange-500/30 rounded-xl"
        >
          <h4 className="font-semibold text-orange-400 mb-2">
            📢 Finalist Announcement
          </h4>
          <p className="text-muted text-sm">
            We will announce the 2nd round finalists on Discord on Sunday, April 12th
            around 8:00 AM ET. Be prepared to pitch between 12:30 PM and 2:00 PM.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function PrizesSection() {
  return (
    <section className="py-20 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Rewards"
          title="Prize Distribution"
          description="A community-focused model that rewards all participants"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Prize bars */}
          <motion.div variants={itemVariants} className="space-y-4 mb-8">
            {prizes.map((prize) => (
              <div key={prize.place} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{prize.place}</span>
                  <span
                    className="font-bold"
                    style={{ color: prize.color }}
                  >
                    {prize.percentage}%
                  </span>
                </div>
                <div className="h-3 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${prize.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: prize.color }}
                  />
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={cardVariants}
            className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6"
          >
            <h4 className="font-semibold text-orange-400 mb-3">
              How the Community Split Works
            </h4>
            <p className="text-muted text-sm">
              The 70% community pool is distributed among all qualifying submissions
              (above bottom 5%) based on ranked or tiered scoring. This means even if
              you don&apos;t place in the top 3, your hard work can still be rewarded!
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-center text-muted text-sm mt-6"
          >
            Total prize pool amount will be announced once sponsor commitments are
            finalized.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function JudgingSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Evaluation"
          title="Judging Criteria"
          description="How your project will be evaluated"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {judgingCriteria.map((criterion) => (
            <motion.div
              key={criterion.title}
              variants={cardVariants}
              className="bg-surface border border-border rounded-xl p-6 hover:border-orange-500/30 transition-colors"
            >
              <criterion.icon className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-semibold mb-2">{criterion.title}</h3>
              <p className="text-muted text-sm">{criterion.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function RulesSection() {
  return (
    <section className="py-20 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Guidelines"
          title="Rules & Eligibility"
          description="What you need to know before participating"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={cardVariants}>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-orange-400" />
              Eligibility
            </h3>
            <ul className="space-y-3 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Must be 18 years or older at time of event
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Open to university students and professionals worldwide
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Must complete application and be accepted
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                In-person attendance at MIT is required
              </li>
            </ul>
          </motion.div>

          <motion.div variants={cardVariants}>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-orange-400" />
              Project Rules
            </h3>
            <ul className="space-y-3 text-muted text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Work solo or in teams of up to 5 members
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                All code must be written during the hackathon
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Version control with regular commits is mandatory
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-1">•</span>
                Projects must fit into eligible domains
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 p-6 bg-background border border-border rounded-xl"
        >
          <h4 className="font-semibold mb-2">Code of Conduct</h4>
          <p className="text-muted text-sm">
            All participants must follow our Code of Conduct. Harassment of any kind
            will not be tolerated. The hackathon is committed to providing a safe and
            inclusive environment. Violations may result in immediate disqualification.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          badge="Questions"
          title="Frequently Asked Questions"
          description="Everything you need to know about the hackathon"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-surface border border-border rounded-xl px-6 data-[state=open]:border-orange-500/30"
                >
                  <AccordionTrigger className="hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function SponsorsSection() {
  const sponsorBenefits = [
    {
      icon: Users2,
      title: "Access Top Talent",
      description:
        "Connect with talented developers, designers, and entrepreneurs from MIT and beyond.",
    },
    {
      icon: Megaphone,
      title: "Brand Visibility",
      description:
        "Get your brand in front of hundreds of passionate builders in the crypto space.",
    },
    {
      icon: Handshake,
      title: "Community Impact",
      description:
        "Support the next generation of Bitcoin innovation and open-source development.",
    },
    {
      icon: Sparkles,
      title: "Custom Challenges",
      description:
        "Create sponsored challenge tracks to see your technology used in creative ways.",
    },
  ];

  return (
    <section id="sponsors" className="py-20 px-6 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          badge="Partner With Us"
          title="Become a Sponsor"
          description="Help us make the 13th Annual MIT Bitcoin Hackathon the best one yet"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 gap-6 mb-10"
        >
          {sponsorBenefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="bg-background border border-border rounded-xl p-6 hover:border-orange-500/30 transition-colors"
            >
              <benefit.icon className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-xl font-semibold mb-3">
            Interested in Sponsoring?
          </h3>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            We offer various sponsorship tiers with different benefits. Reach out
            to learn more about how you can support the hackathon.
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
            asChild
          >
            <a href="mailto:hackathon-mitbitcoinexpo@googlegroups.com?subject=Hackathon%20Sponsorship%20Inquiry">
              Contact Us About Sponsorship
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative bg-gradient-to-br from-orange-500/20 via-surface to-surface border border-orange-500/30 rounded-2xl p-8 md:p-12 text-center overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <motion.div variants={itemVariants} className="relative z-10">
            <Badge
              variant="outline"
              className="mb-4 border-orange-500/50 text-orange-400 bg-orange-500/10"
            >
              Registration Open
            </Badge>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="relative z-10 text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Build?
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="relative z-10 text-muted max-w-xl mx-auto mb-8"
          >
            Join us at MIT on April 10-12, 2026 for 36 hours of hacking,
            learning, and building the future of Bitcoin.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white"
              asChild
            >
              <Link href="https://devpost.com" target="_blank">
                Register Now
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-500/30 hover:bg-orange-500 hover:text-white hover:border-orange-500"
              asChild
            >
              <Link href="https://twitter.com/MITBitcoinClub" target="_blank">
                Follow @MITBitcoinClub
              </Link>
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="relative z-10 text-muted text-sm mt-6"
          >
            Questions? Email us at{" "}
            <a
              href="mailto:hackathon-mitbitcoinexpo@googlegroups.com"
              className="text-orange-400 hover:underline"
            >
              hackathon-mitbitcoinexpo@googlegroups.com
            </a>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default function HackathonPage() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <KeyDetailsSection />
      <AboutSection />
      <GetStartedSection />
      <ScheduleSection />
      <TracksSection />
      <SubmissionSection />
      <PrizesSection />
      <JudgingSection />
      <RulesSection />
      <FAQSection />
      <SponsorsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
