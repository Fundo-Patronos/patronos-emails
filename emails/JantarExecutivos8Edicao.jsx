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
 * 8ª Edição do Jantar de Executivos - Convite
 * Email de convite para executivos e alumni da Unicamp
 * Data: 13 de Abril de 2026
 */
export default function JantarExecutivos8Edicao() {
  return (
    <Html>
      <Head />
      <Preview>Convite exclusivo: 8ª Edição do Jantar de Executivos - Fundo Patronos</Preview>
      <Body style={{ backgroundColor: brand.colors.background.light, fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] my-[40px]">

          {/* Header Image */}
          <Section className="mb-[32px]">
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

          {/* Título do Convite */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 font-semibold text-[24px] leading-[32px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              8ª Edição do Jantar de Executivos
            </Heading>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'justify'}}>
              É com grande satisfação que o Fundo Patrimonial Patronos convida você para a 8ª Edição do Jantar de Executivos, reunindo líderes, empreendedores e alumni da Unicamp em uma noite de conexões estratégicas e visões de futuro.
            </Text>
            <Text style={{ marginTop: '16px', marginBottom: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'justify'}}>
              Esta edição contará com a presença especial do <strong style={{ color: brand.colors.text.primary }}>Prof. Anderson Rocha</strong>, um dos cientistas mais influentes do mundo segundo o ranking de Stanford (top 2%). Anderson trará uma visão única sobre o futuro da Inteligência Artificial e seu impacto estratégico para o Brasil.
            </Text>
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Destaques da Edição */}
          <Section className="mb-[32px]">
            <Heading
              as="h3"
              className="m-0 mb-[16px] font-semibold text-[20px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Destaques da Edição
            </Heading>

            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '16px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '80px', verticalAlign: 'top', paddingRight: '12px' }}>
                    <Img
                      src="https://www2.unicamp.br/unicamp/sites/default/files/banco_imagens/2019/04/05/20190329_4-5_anderson-de-rezende-rocha-posse-no-IC-instituto-eldorado_scarpa_AJS_2443.jpg"
                      alt="Prof. Anderson Rocha"
                      width="72"
                      height="72"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </td>
                  <td style={{ fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', verticalAlign: 'top' }}>
                    <strong style={{ color: brand.colors.gradient.stops.orange }}>Prof. Anderson Rocha</strong>
                    <br />
                    <span style={{ fontSize: '13px', color: brand.colors.text.light, lineHeight: '20px' }}>
                      Top 2% cientistas do mundo (Stanford) · Microsoft & Google Research Fellow · Laureado com o Prêmio Zeferino Vaz (2025), maior reconhecimento da Unicamp
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0" style={{ marginBottom: '16px' }}>
              <tbody>
                <tr>
                  <td style={{ width: '80px', verticalAlign: 'top', paddingRight: '12px' }}>
                    <Img
                      src="https://prefeitura.rio/wp-content/uploads/2021/10/Cristo-DePaula2-2.jpg"
                      alt="Brasil como líder global"
                      width="72"
                      height="72"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </td>
                  <td style={{ fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', verticalAlign: 'top' }}>
                    <strong style={{ color: brand.colors.gradient.stops.orange }}>Brasil como Líder Global</strong>
                    <br />
                    <span style={{ fontSize: '13px', color: brand.colors.text.light, lineHeight: '20px' }}>
                      Como a Inteligência Artificial pode impulsionar o nosso país a se tornar líder global em diversas áreas estratégicas.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>

            <table width="100%" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td style={{ width: '80px', verticalAlign: 'top', paddingRight: '12px' }}>
                    <Img
                      src="https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2025/04/Fachada-Unicamp.jpg"
                      alt="Unicamp"
                      width="72"
                      height="72"
                      style={{
                        width: '72px',
                        height: '72px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  </td>
                  <td style={{ fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', verticalAlign: 'top' }}>
                    <strong style={{ color: brand.colors.gradient.stops.orange }}>O Papel da Unicamp</strong>
                    <br />
                    <span style={{ fontSize: '13px', color: brand.colors.text.light, lineHeight: '20px' }}>
                      Como a Unicamp e as universidades brasileiras estão se posicionando na vanguarda da pesquisa e inovação para liderar a transformação tecnológica do país.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
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
                    14 de abril de 2026, Terça-feira
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

          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Contribuição */}
          <Section className="mb-[32px]" style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '24px' }}>
            <Text style={{ margin: '0 0 16px 0', fontSize: '16px', color: brand.colors.text.primary, lineHeight: '28px', textAlign: 'left' }}>
              <strong>A participação no jantar requer uma contribuição mínima de R$ 1.000</strong>, integralmente destinada ao fortalecimento do Fundo Patrimonial Patronos.
            </Text>
            <Text style={{ margin: '0 0 16px 0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'left' }}>
              <strong style={{ color: brand.colors.text.primary }}>Contribuições:</strong> PIX para <span style={{ color: brand.colors.text.primary, fontWeight: '500' }}>operacoes@patronos.org</span> ou cartão de crédito em{' '}
              <Link href="https://doa.re/patronos" style={{ color: brand.colors.gradient.stops.orange, textDecoration: 'underline' }}>
                doa.re/patronos
              </Link>
            </Text>
            <Text style={{ margin: '0', fontSize: '16px', color: brand.colors.text.secondary, lineHeight: '28px', textAlign: 'left', fontStyle: 'italic' }}>
              Durante o evento, convidaremos os presentes a realizarem novas doações para apoiar as iniciativas apresentadas do Fundo Patronos para 2026.
            </Text>
          </Section>

          {/* CTA - Confirmar Presença */}
          <Section style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
            <Button href="https://tally.so/r/KY0AMX" variant="primary">
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
