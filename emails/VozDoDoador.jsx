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
 * Voz do Doador - Pesquisa Anual de Satisfação
 * Email convidando doadores a responderem a pesquisa anual do Fundo Patronos
 */
export default function VozDoDoador() {
  return (
    <Html>
      <Head />
      <Preview>Responda à pesquisa Voz do Doador 2026 - leva apenas 5 minutos</Preview>
      <Body style={{ backgroundColor: '#ffffff', fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] my-[40px]">

          {/* Header Image */}
          <Section className="mb-[24px]">
            <Img
              src="https://raw.githubusercontent.com/Fundo-Patronos/patronos-emails/main/public/images/PNG%20-%20Generic%20Email%20Header%20-%20Cover%20Image%20(600%20x%20200%20px).png"
              alt="Fundo Patronos - Voz do Doador"
              width="536"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </Section>

          {/* Título Principal */}
          <Section className="mb-[24px]">
            <Heading
              as="h2"
              className="m-0 font-semibold text-[24px] leading-[32px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Queremos ouvir você!
            </Heading>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              Você faz parte da transformação da Unicamp. Por isso, queremos ouvir suas impressões na <strong style={{ color: brand.colors.text.primary }}>Voz do Doador</strong>, nossa pesquisa anual. Sua opinião é essencial para continuarmos evoluindo juntos.
            </Text>
          </Section>

          {/* Por que participar */}
          <Section style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '16px 24px 20px 24px', marginTop: '32px', marginBottom: '32px' }}>
            <Heading
              as="h3"
              className="m-0 mb-[12px] font-semibold text-[18px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Por que participar?
            </Heading>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ paddingBottom: '8px', verticalAlign: 'top' }}>
                    <table cellPadding="0" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td width="24" style={{ width: '24px', minWidth: '24px', maxWidth: '24px', verticalAlign: 'top', paddingTop: '2px' }}>
                            <table cellPadding="0" cellSpacing="0" style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)' }}>
                              <tbody>
                                <tr>
                                  <td align="center" valign="middle" style={{ color: 'white', fontSize: '14px', fontWeight: '600', lineHeight: '24px' }}>
                                    ✓
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ paddingLeft: '12px' }}>
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '24px' }}>
                              Aprimoramos nossos projetos e comunicação
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={{ paddingBottom: '8px', verticalAlign: 'top' }}>
                    <table cellPadding="0" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td width="24" style={{ width: '24px', minWidth: '24px', maxWidth: '24px', verticalAlign: 'top', paddingTop: '2px' }}>
                            <table cellPadding="0" cellSpacing="0" style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)' }}>
                              <tbody>
                                <tr>
                                  <td align="center" valign="middle" style={{ color: 'white', fontSize: '14px', fontWeight: '600', lineHeight: '24px' }}>
                                    ✓
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ paddingLeft: '12px' }}>
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '24px' }}>
                              Entendemos suas expectativas e interesses
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style={{ verticalAlign: 'top' }}>
                    <table cellPadding="0" cellSpacing="0" width="100%">
                      <tbody>
                        <tr>
                          <td width="24" style={{ width: '24px', minWidth: '24px', maxWidth: '24px', verticalAlign: 'top', paddingTop: '2px' }}>
                            <table cellPadding="0" cellSpacing="0" style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)' }}>
                              <tbody>
                                <tr>
                                  <td align="center" valign="middle" style={{ color: 'white', fontSize: '14px', fontWeight: '600', lineHeight: '24px' }}>
                                    ✓
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                          <td style={{ paddingLeft: '12px' }}>
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '24px' }}>
                              Construímos um Fundo mais transparente
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Tempo e CTA */}
          <Section style={{ marginBottom: '24px' }}>
            <Text style={{ marginTop: '0', marginBottom: '16px', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'center' }}>
              A pesquisa leva apenas <strong style={{ color: brand.colors.text.primary }}>5 minutos</strong>.
            </Text>
            <div style={{ textAlign: 'center' }}>
              <Button
                href="https://tally.so/r/J9ljLY"
                variant="primary"
              >
                Responder à Pesquisa
              </Button>
            </div>
          </Section>

          <Hr className="border-gray-200 my-[24px]" />

          {/* Mensagem Final */}
          <Section className="mb-[24px]">
            <Text style={{ textAlign: 'center', fontSize: '16px', fontWeight: '600', color: brand.colors.text.secondary, lineHeight: '28px', margin: '0' }}>
              Juntos, somos melhores!
            </Text>
          </Section>

          {/* Footer */}
          <Hr className="border-gray-200 my-[24px]" />

          {/* Social Media Links */}
          <Section className="mb-[16px]">
            <Text style={{ textAlign: 'center', fontSize: '14px', color: brand.colors.text.secondary, lineHeight: '24px', marginBottom: '8px' }}>
              Acompanhe o Fundo Patronos
            </Text>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
              <tbody>
                <tr>
                  <td align="center">
                    <Link
                      href={brand.links.social.instagram.url}
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
                      href={brand.links.social.linkedin.url}
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
