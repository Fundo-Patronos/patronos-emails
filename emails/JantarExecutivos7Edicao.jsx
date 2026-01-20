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
 * 7ª Edição do Jantar de Executivos - Convite
 * Email de convite para alumni da Unicamp da McKinsey
 * Data: 05 de Fevereiro de 2026
 */
export default function JantarExecutivos7Edicao() {
  return (
    <Html>
      <Head />
      <Preview>Convite exclusivo: 7ª Edição do Jantar de Executivos - Fundo Patronos</Preview>
      <Body style={{ backgroundColor: brand.colors.background.light, fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] my-[40px]">

          {/* Header Image */}
          <Section className="mb-[32px]">
            <Img
              src="https://raw.githubusercontent.com/Fundo-Patronos/patronos-emails/main/public/images/PNG%20-%20Generic%20Email%20Header%20-%20Cover%20Image%20(600%20x%20200%20px).png"
              alt="7ª Edição do Jantar de Executivos - Fundo Patronos"
              width="536"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </Section>

          {/* Título do Convite */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 font-semibold text-[24px] leading-[32px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Jantar de Gala - Fundo Patronos e McKinsey & Company
            </Heading>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              É com grande satisfação que o Fundo Patrimonial Patronos convida você, alumni da Unicamp, para um jantar exclusivo para a equipe da McKinsey & Company, reunindo profissionais de destaque que compartilham a trajetória pela nossa universidade e pela Firma.
            </Text>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              Este encontro será uma oportunidade única para fortalecer conexões estratégicas, compartilhar visões de futuro e celebrar nosso compromisso conjunto com a inovação, a excelência e a perenidade da nossa universidade.
            </Text>
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Sobre o Fundo Patronos */}
          <Section className="mb-[32px]">
            <Heading
              as="h3"
              className="m-0 mb-[12px] font-semibold text-[20px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Sobre o Fundo Patronos
            </Heading>
            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              O Fundo Patrimonial Patronos é o endowment da Unicamp e tem como missão apoiar projetos, pessoas e pesquisas que transformam a educação no Brasil. Ao longo de sua trajetória, já apoiou mais de 2 mil alunos e realizou editais que ampliaram o acesso à educação e impulsionaram carreiras, inspirando a próxima geração de líderes.
            </Text>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              Nesta edição, contaremos com a presença de líderes e beneficiários do Fundo, além da apresentação de novidades e resultados.
            </Text>
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Detalhes do Evento */}
          <Section className="mb-[32px]">
            <Heading
              as="h3"
              className="m-0 mb-[16px] font-semibold text-[20px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Detalhes do Evento
            </Heading>

            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '8px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '100px', fontSize: '16px', color: brand.colors.text.primary, fontWeight: '600', lineHeight: '28px', verticalAlign: 'top' }}>
                    Onde:
                  </td>
                  <td style={{ fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                    Sociedad Gastronomica - R. Carla, 25 - Itaim Bibi, São Paulo - SP, 04531-070
                  </td>
                </tr>
              </tbody>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '8px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '100px', fontSize: '16px', color: brand.colors.text.primary, fontWeight: '600', lineHeight: '28px', verticalAlign: 'top' }}>
                    Quando:
                  </td>
                  <td style={{ fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                    05 de fevereiro de 2026, Quinta-feira
                  </td>
                </tr>
              </tbody>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '8px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '100px', fontSize: '16px', color: brand.colors.text.primary, fontWeight: '600', lineHeight: '28px', verticalAlign: 'top' }}>
                    Horário:
                  </td>
                  <td style={{ fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                    19h às 23h
                  </td>
                </tr>
              </tbody>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ width: '100px', fontSize: '16px', color: brand.colors.text.primary, fontWeight: '600', lineHeight: '28px', verticalAlign: 'top' }}>
                    Experiência:
                  </td>
                  <td style={{ fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                    Jantar preparado pelo chef Julian Rigo em espaço exclusivo
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Contribuição */}
          <Section className="mb-[32px]" style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '24px' }}>
            <Text style={{ margin: '0 0 16px 0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '28px', textAlign: 'left' }}>
              <strong>A participação no jantar requer uma contribuição mínima de R$ 1.000</strong>, integralmente destinada ao fortalecimento do Fundo Patrimonial Patronos.
            </Text>
            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'left' }}>
              <strong style={{ color: brand.colors.text.primary }}>Contribuições:</strong> PIX para <span style={{ color: brand.colors.text.primary, fontWeight: '500' }}>operacoes@patronos.org</span> ou cartão de crédito em{' '}
              <Link href="https://doa.re/patronos" style={{ color: brand.colors.gradient.stops.orange, textDecoration: 'underline' }}>
                doa.re/patronos
              </Link>
            </Text>
          </Section>

          {/* CTA - Confirmar Presença */}
          <Section style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
            <Button href="https://tally.so/r/obRJ7P" variant="primary">
              Confirmar Presença
            </Button>
          </Section>

          {/* Mensagem Final */}
          <Section className="mb-[32px]">
            <Text style={{ textAlign: 'center', fontSize: '16px', fontWeight: '600', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              Juntos, somos melhores!
            </Text>
          </Section>

          {/* Footer */}
          <Hr className="border-gray-200 my-[32px]" />

          {/* Social Media Links */}
          <Section className="mb-[24px]">
            <Text style={{ textAlign: 'center', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', marginBottom: '12px' }}>
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
            <Text className="text-center text-[14px] text-gray-500 leading-[24px] mb-[8px]">
              <strong style={{ color: brand.colors.text.primary }}>Fundo Patrimonial Patronos</strong>
              <br />
              Acelerando a missão acadêmica da Unicamp
            </Text>
            <Text className="text-center text-[12px] text-gray-400 leading-[20px]">
              {brand.organization.legalName} - CNPJ: {brand.organization.cnpj}
              <br />
              {brand.organization.address.full}
            </Text>
            <Text className="text-center text-[12px] text-gray-400 leading-[20px] mt-[16px]">
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
