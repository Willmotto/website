import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOUNDARIES_DATA } from "@/data/boundaries-data";
import { ProjectCard } from "@/components/project-card";
import PagesLayout from './layout'; // Adjust path if needed
import { ReactElement, ReactNode } from "react";
import { BOUNDARIES_IMAGE } from "@/data/boundaries-data";
import Image from "next/image";



export const metadata: Metadata = {
  title: `${BOUNDARIES_DATA.name} | ${BOUNDARIES_DATA.about}`,
  description: BOUNDARIES_DATA.about,
};

export default function Boundaries() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{BOUNDARIES_DATA.name}</h1>



            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {BOUNDARIES_DATA.about}
            </p>
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                href={BOUNDARIES_DATA.locationLink}
                target="_blank"
              >
                <GlobeIcon className="size-3" />
                {BOUNDARIES_DATA.location}
              </a>
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {BOUNDARIES_DATA.contact.email ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${BOUNDARIES_DATA.contact.email}`}>
                    <MailIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {BOUNDARIES_DATA.contact.tel ? (
                <Button
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`tel:${BOUNDARIES_DATA.contact.tel}`}>
                    <PhoneIcon className="size-4" />
                  </a>
                </Button>
              ) : null}
              {BOUNDARIES_DATA.contact.social.map((social) => (
                <Button
                  key={social.name}
                  className="size-8"
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={social.url}>
                    <social.icon className="size-4" />
                  </a>
                </Button>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {BOUNDARIES_DATA.contact.email ? (
                <a href={`mailto:${BOUNDARIES_DATA.contact.email}`}>
                  <span className="underline">{BOUNDARIES_DATA.contact.email}</span>
                </a>
              ) : null}
              {BOUNDARIES_DATA.contact.tel ? (
                <a href={`tel:${BOUNDARIES_DATA.contact.tel}`}>
                  <span className="underline">{BOUNDARIES_DATA.contact.tel}</span>
                </a>
              ) : null}
            </div>
          </div>
          <Avatar className="size-28">
            <AvatarImage alt={BOUNDARIES_DATA.name} src={BOUNDARIES_DATA.avatarUrl} />
            <AvatarFallback>{BOUNDARIES_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <Section>
          <h2 className="text-xl font-bold">Development</h2>
          <Image
            src={BOUNDARIES_IMAGE.img1}
            alt="Descriptive alt text for the image"
            className="w-3/4 ml-left"
          />
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {BOUNDARIES_DATA.img1}
          </p>
          <Image
            src={BOUNDARIES_IMAGE.img2}
            alt="Descriptive alt text for the image"
            className="w-3/4 ml-left"
          />
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {BOUNDARIES_DATA.img2}
          </p>
        </Section>

        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {BOUNDARIES_DATA.education.map((education) => {
            return (
              <Card key={education.school}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      {education.school}
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {education.start} - {education.end}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="mt-2">{education.degree}</CardContent>
              </Card>
            );
          })}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {BOUNDARIES_DATA.skills.map((skill) => {
              return <Badge key={skill}>{skill}</Badge>;
            })}
          </div>
        </Section>

        <Section className="print-force-new-page scroll-mb-16">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3">
            {BOUNDARIES_DATA.projects.map((project) => {
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                />
              );
            })}
          </div>
        </Section>
      </section>

      <CommandMenu
        links={[
          {
            url: BOUNDARIES_DATA.personalWebsiteUrl,
            title: "Personal Website",
          },
          ...BOUNDARIES_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name,
          })),
        ]}
      />
    </main>
    
  );
}
Boundaries.getLayout = function getLayout(page: ReactElement) {
  return (
    <PagesLayout metadata={metadata}>
      {/* Enclose metadata.title in curly braces */}
      <title>{metadata.title as ReactNode}</title>
      {page}
    </PagesLayout>
  );
};

