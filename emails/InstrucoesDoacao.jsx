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
 * Instruções de Doação - Email informativo
 * Email explicando como e por que contribuir com o Fundo Patronos
 */
export default function InstrucoesDoacao() {
  return (
    <Html>
      <Head />
      <Preview>Como contribuir com o Fundo Patronos - Transformando vidas através da educação</Preview>
      <Body style={{ backgroundColor: '#ffffff', fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] my-[40px]">

          {/* Header Image */}
          <Section className="mb-[32px]">
            <Img
              src="https://raw.githubusercontent.com/Fundo-Patronos/patronos-emails/main/public/images/PNG%20-%20Generic%20Email%20Header%20-%20Cover%20Image%20(600%20x%20200%20px).png"
              alt="Fundo Patronos - Como Contribuir"
              width="536"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </Section>

          {/* Por que contribuir */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 font-semibold text-[24px] leading-[32px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Por que contribuir com o Fundo Patronos
            </Heading>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              Sua contribuição ao Fundo Patrimonial Patronos fortalece a Unicamp e amplia seu impacto na sociedade brasileira através da educação, pesquisa e inovação.
            </Text>
          </Section>

          {/* 6 Razões para Contribuir */}
          <Section className="mb-[32px]">
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginTop: '24px' }}>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td width="50%" style={{ paddingRight: '12px', paddingBottom: '24px', verticalAlign: 'top' }}>
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
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                              Retornar valor à comunidade da Unicamp
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="50%" style={{ paddingLeft: '12px', paddingBottom: '24px', verticalAlign: 'top' }}>
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
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                              Apoiar o desenvolvimento da educação no Brasil
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {/* Row 2 */}
                <tr>
                  <td width="50%" style={{ paddingRight: '12px', paddingBottom: '24px', verticalAlign: 'top' }}>
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
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                              Conectar atuais e futuros líderes da comunidade
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="50%" style={{ paddingLeft: '12px', paddingBottom: '24px', verticalAlign: 'top' }}>
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
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                              Elevar o prestígio acadêmico em nível global
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                {/* Row 3 */}
                <tr>
                  <td width="50%" style={{ paddingRight: '12px', verticalAlign: 'top' }}>
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
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                              Construir um dos maiores fundos patrimoniais do Brasil
                            </Text>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td width="50%" style={{ paddingLeft: '12px', verticalAlign: 'top' }}>
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
                            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
                              Impulsionar a educação e inovação no país
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

          <Hr className="border-gray-200 my-[32px]" />

          {/* Como Contribuir */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 mb-[16px] font-semibold text-[24px] leading-[32px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Como Contribuir
            </Heading>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              Você pode fazer doações pontuais ou recorrentes para o Fundo. Escolha a forma que melhor se adequa ao seu perfil:
            </Text>
          </Section>

          {/* Doações Pontuais via PIX */}
          <Section className="mb-[24px]" style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '24px' }}>
            <Heading
              as="h3"
              className="m-0 mb-[12px] font-semibold text-[18px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Doações Pontuais via PIX
            </Heading>
            <Text style={{ margin: '0 0 16px 0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '28px' }}>
              Para doações pontuais, a forma mais rápida e prática é através do PIX:
            </Text>
            <div style={{
              margin: '0',
              fontSize: '18px',
              color: brand.colors.text.primary,
              lineHeight: '28px',
              fontWeight: '600',
              backgroundColor: 'white',
              padding: '12px 16px',
              borderRadius: '6px',
              border: '2px solid #e5e7eb',
              textAlign: 'center',
              fontFamily: 'monospace'
            }}>
              <span style={{ pointerEvents: 'none', userSelect: 'all' }}>operacoes@patronos.org</span>
            </div>
          </Section>

          {/* Doações Recorrentes ou Cartão */}
          <Section className="mb-[32px]" style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '24px' }}>
            <Heading
              as="h3"
              className="m-0 mb-[12px] font-semibold text-[18px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Doações Recorrentes ou via Cartão de Crédito
            </Heading>
            <Text style={{ margin: '0 0 16px 0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '28px' }}>
              Para doações recorrentes ou pontuais via cartão de crédito, boleto ou outros meios de pagamento, utilize nosso sistema de contribuições:
            </Text>
            <div style={{ textAlign: 'center' }}>
              <Button
                href="https://doa.re/patronos"
                variant="primary"
              >
                Fazer Minha Doação
              </Button>
            </div>
          </Section>

          {/* Mensagem Final */}
          <Section className="mb-[32px]" style={{ marginTop: '32px' }}>
            <Text style={{ textAlign: 'center', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px' }}>
              Cada doação, seja ela pontual ou recorrente, faz a diferença na vida de milhares de estudantes e contribui para o fortalecimento da Unicamp.
            </Text>
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Relatório Anual 2024 */}
          <Section className="mb-[32px]" style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '24px' }}>
            <Heading
              as="h3"
              className="m-0 mb-[12px] font-semibold text-[18px] leading-[28px] text-center"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Relatório Anual 2024
            </Heading>
            <Text style={{ margin: '0 0 16px 0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '28px', textAlign: 'left' }}>
              Conheça os resultados do nosso trabalho em 2024 e o impacto que geramos juntos para a Unicamp.
            </Text>
            <div style={{ textAlign: 'center' }}>
              <Button
                href="https://www.patronos.org/Relatorios%20Anuais/Fundo%20Patronos%20-%20Relatorio%20Anual%202024.pdf"
                variant="primary"
              >
                Ver Relatório Anual 2024
              </Button>
            </div>
          </Section>

          <Section className="mb-[32px]">
            <Text style={{ textAlign: 'center', fontSize: '16px', fontWeight: '600', color: brand.colors.text.secondary, lineHeight: '28px', marginTop: '16px' }}>
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
                      href={brand.links.social.instagram}
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
                      href={brand.links.social.linkedin}
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
