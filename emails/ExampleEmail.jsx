import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
} from '@react-email/components';
import {
  Hero,
  FeatureList,
  ButtonGroup,
  brand,
} from '../src/components';

/**
 * Example Email Template
 * Demonstrates how to use the Patronos components library
 */
export default function ExampleEmail() {
  return (
    <Html>
      <Head />
      <Preview>Confira as novidades do Fundo Patronos</Preview>
      <Body style={{ backgroundColor: brand.colors.background.light, fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[24px] my-[40px]">

          {/* Hero Section */}
          <Hero
            image="https://patronos.org/images/hero-example.jpg"
            imageAlt="Campus da Unicamp"
            tagline="Newsletter Mensal"
            title="Transformando a Educação na Unicamp"
            description="Descubra como suas doações estão criando oportunidades e transformando vidas de estudantes em vulnerabilidade socioeconômica."
            cta={{
              text: 'Leia mais',
              href: brand.links.website.home,
            }}
          />

          {/* Feature List */}
          <FeatureList
            title="Impacto em Números"
            description="Veja o que conquistamos juntos neste mês:"
            features={[
              {
                title: '150 Bolsas Extras',
                description: 'Bolsas de auxílio distribuídas para estudantes em situação de vulnerabilidade socioeconômica.',
              },
              {
                title: '45 Mentorias no Centro de Carreiras',
                description: 'Sessões de orientação profissional com alumni e parceiros do mercado.',
              },
              {
                title: 'R$ 2,5 milhões arrecadados',
                description: 'Total de doações recebidas este ano para apoiar nossos programas.',
              },
            ]}
          />

          {/* CTA Buttons */}
          <Section className="mt-[32px]">
            <ButtonGroup
              primaryButton={{
                text: 'Fazer uma doação',
                href: brand.links.actions.donate,
              }}
              secondaryButton={{
                text: 'Conhecer programas',
                href: brand.links.website.home,
              }}
            />
          </Section>

          {/* Footer */}
          <Section className="mt-[48px] border-t border-gray-200 pt-[24px]">
            <Text className="text-center text-[14px] text-gray-500 leading-[24px]">
              {brand.emailConfig.footerText.copyright}
            </Text>
            <Text className="text-center text-[12px] text-gray-400 leading-[20px]">
              {brand.organization.legalName} - CNPJ: {brand.organization.cnpj}
              <br />
              {brand.organization.address.full}
            </Text>
            <Text className="text-center text-[12px] text-gray-400 leading-[20px] mt-[16px]">
              <a href={brand.links.actions.newsletter} style={{ color: brand.colors.gradient.stops.orange }}>
                Cancelar inscrição
              </a>
              {' | '}
              <a href={brand.links.website.transparency} style={{ color: brand.colors.gradient.stops.orange }}>
                Transparência
              </a>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
