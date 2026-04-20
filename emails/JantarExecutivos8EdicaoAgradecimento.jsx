import React from 'react';
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Img,
  Link,
} from '@react-email/components';
import {
  Button,
  brand,
} from '../src/components';

/**
 * 8ª Edição do Jantar de Executivos - Email de Agradecimento
 * Email pós-evento agradecendo pela presença
 */
export default function JantarExecutivos8EdicaoAgradecimento() {
  return (
    <Html>
      <Head />
      <Preview>Obrigado por uma noite inesquecível! 8ª Edição do Jantar de Executivos</Preview>
      <Body style={{ backgroundColor: brand.colors.background.light, fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] my-[40px]">

          {/* Header Image */}
          <Section className="mb-[24px]">
            <Img
              src="https://raw.githubusercontent.com/Fundo-Patronos/patronos-emails/main/public/images/PNG%20-%20Generic%20Email%20Header%20-%20Cover%20Image%20(600%20x%20200%20px).png"
              alt="8ª Edição do Jantar de Executivos - Fundo Patronos"
              width="536"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </Section>

          {/* Mensagem de Agradecimento */}
          <Section className="mb-[24px]">
            <Heading
              as="h2"
              className="m-0 font-semibold text-[24px] leading-[32px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Obrigado por fazer parte desta noite especial!
            </Heading>
            <Text style={{ marginTop: '12px', marginBottom: '24px', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'justify' }}>
              Ficamos felizes com a sua presença na 8ª Edição do Jantar de Executivos, falamos sobre o futuro da AI, do potencial do Brasil para se tornar líder global em áreas estratégicas e do papel da Unicamp nessa agenda.
            </Text>
          </Section>

          {/* Pesquisa de Satisfação */}
          <Section className="mb-[16px]">
            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'justify' }}>
              Esperamos que tenha gostado da palestra do Prof. Anderson Rocha. Queremos saber a sua opinião sobre o evento, se atendeu as suas expectativas e entender o que podemos fazer para tornar a experiência do Jantar de Executivos ainda melhor.
            </Text>
          </Section>

          <Section style={{ textAlign: 'center', marginTop: '24px', marginBottom: '4px' }}>
            <Button href="https://tally.so/r/GxBQ2Z" variant="primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
              Responder Pesquisa
            </Button>
          </Section>
          <Section className="mb-[16px]">
            <Text style={{ textAlign: 'center', fontSize: '13px', color: brand.colors.text.light, lineHeight: '20px', margin: '0' }}>
              Tempo aproximado: 3 minutos
            </Text>
          </Section>

          {/* Novidade - Vídeo Antares */}
          <Section className="mb-[16px]" style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '12px 20px' }}>
            <Heading
              as="h3"
              className="m-0 mb-[4px] font-semibold text-[16px] leading-[24px] text-center"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Novidades em Primeira Mão
            </Heading>
            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '28px', textAlign: 'justify' }}>
              Em breve divulgaremos o nosso vídeo mostrando a jornada dos alunos do Antares Foguetemodelismo, apoiados pelo Patronos. Fique atento às nossas redes!
            </Text>
          </Section>

          {/* Compromisso com a Unicamp */}
          <Section className="mb-[16px]">
            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'justify' }}>
              Cada conversa, cada contribuição fortalecem nosso compromisso coletivo com a excelência e perenidade da Unicamp.
            </Text>
          </Section>

          {/* CTA - Contribuir Agora */}
          <Section style={{ textAlign: 'center', marginTop: '24px', marginBottom: '24px' }}>
            <Button href="https://doa.re/patronos" variant="primary" style={{ padding: '8px 20px', fontSize: '13px' }}>
              Contribuir Agora
            </Button>
          </Section>

          {/* Mensagem Final */}
          <Section className="mb-[16px]">
            <Text style={{ textAlign: 'center', fontSize: '16px', fontWeight: '600', color: brand.colors.text.secondary, lineHeight: '28px', margin: '0' }}>
              Juntos, somos melhores!
            </Text>
          </Section>

          {/* Footer */}
          <Hr className="border-gray-200 my-[16px]" />

          {/* Social Media Links */}
          <Section className="mb-[12px]">
            <Text style={{ textAlign: 'center', fontSize: '14px', color: brand.colors.text.secondary, lineHeight: '24px', marginBottom: '8px', marginTop: '0' }}>
              Acompanhe o Fundo Patronos
            </Text>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
              <tbody>
                <tr>
                  <td align="center">
                    <Link
                      href="https://www.instagram.com/fundopatronos/"
                      style={{
                        display: 'inline-block',
                        margin: '0 12px',
                        color: brand.colors.gradient.stops.orange,
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      Instagram
                    </Link>
                    <span style={{ color: brand.colors.text.light, margin: '0 4px' }}>•</span>
                    <Link
                      href="https://www.linkedin.com/company/fundo-patronos"
                      style={{
                        display: 'inline-block',
                        margin: '0 12px',
                        color: brand.colors.gradient.stops.orange,
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      LinkedIn
                    </Link>
                    <span style={{ color: brand.colors.text.light, margin: '0 4px' }}>•</span>
                    <Link
                      href="https://patronos.org"
                      style={{
                        display: 'inline-block',
                        margin: '0 12px',
                        color: brand.colors.gradient.stops.orange,
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      Website
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Section>
            <Text style={{ textAlign: 'center', fontSize: '13px', color: '#6B7280', lineHeight: '18px', margin: '0 0 4px 0' }}>
              <strong style={{ color: brand.colors.text.primary }}>Fundo Patrimonial Patronos</strong> · Acelerando a missão acadêmica da Unicamp
            </Text>
            <Text style={{ textAlign: 'center', fontSize: '11px', color: '#9CA3AF', lineHeight: '16px', margin: '0' }}>
              {brand.organization.legalName} - CNPJ: {brand.organization.cnpj} · {brand.organization.address.full}
            </Text>
            <Text style={{ textAlign: 'center', fontSize: '11px', color: '#9CA3AF', lineHeight: '16px', margin: '4px 0 0 0' }}>
              <a href={brand.links.website.contact} style={{ color: brand.colors.gradient.stops.orange, textDecoration: 'none' }}>
                Fale Conosco
              </a>
              {' | '}
              <a href={brand.links.website.transparency} style={{ color: brand.colors.gradient.stops.orange, textDecoration: 'none' }}>
                Transparência
              </a>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}
