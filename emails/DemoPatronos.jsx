import React from 'react';
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Img,
  Hr,
  Heading,
} from '@react-email/components';
import { colors, typography, links } from '../src/config/brand';

// Importar componentes reutilizáveis conforme necessário
import { Button, ButtonGroup, Hero, FeatureList, FeatureGrid, NumberedList, ImageGrid } from '../src/components';

export default function DemoPatronos() {
  return (
    <Html>
      <Head />
      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* Aguardando componentes do usuário */}

          {/* Header com Imagem */}
          <Section style={styles.headerSection}>
            <Img
              alt="Fundo Patronos - Transformando a Unicamp"
              src="https://raw.githubusercontent.com/Fundo-Patronos/patronos-emails/main/public/images/PNG%20-%20Generic%20Email%20Header%20-%20Cover%20Image%20(600%20x%20200%20px).png"
              width="600"
              height="200"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <Section style={styles.headerContent}>
              <Text style={styles.headerLabel}>Transformação pela Educação</Text>
              <Heading
                as="h1"
                style={styles.headerTitle}
              >
                Apoie a Excelência Acadêmica da Unicamp
              </Heading>
              <Text style={styles.headerDescription}>
                O Fundo Patrimonial Patronos conecta doadores à transformação da educação superior.
                Cada contribuição fortalece bolsas, programas de carreira e infraestrutura que
                impactam milhares de estudantes, criando um legado de excelência e oportunidades.
              </Text>
              <Link
                href={links.actions.donate}
                style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)',
                  padding: '12px 40px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                }}
              >
                Saiba Mais
              </Link>
            </Section>
          </Section>

          {/* Botões de CTA */}
          <Section style={styles.ctaSection}>
            <table width="100%" cellPadding="0" cellSpacing="0" style={{ margin: '0 auto' }}>
              <tbody>
                <tr>
                  <td align="center" style={{ paddingRight: '8px' }} width="50%">
                    <Link
                      href={links.actions.donate}
                      style={{
                        display: 'block',
                        background: 'linear-gradient(135deg, #ff9700, #ff6253, #fc4696, #c964e2)',
                        color: '#FFFFFF',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        textAlign: 'center',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      Faça uma doação
                    </Link>
                  </td>
                  <td align="center" style={{ paddingLeft: '8px' }} width="50%">
                    <Link
                      href={links.website.about}
                      style={{
                        display: 'block',
                        background: '#FFFFFF',
                        color: '#111827',
                        border: '1px solid #D1D5DB',
                        padding: '12px 24px',
                        borderRadius: '6px',
                        fontSize: '14px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        textAlign: 'center',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      Conheça o Fundo
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Hr style={styles.divider} />

            <Text style={styles.footerTitle}>Acompanhe o Fundo Patronos</Text>

            <Text style={styles.socialLinks}>
              <Link href={links.social.instagram} style={styles.link}>Instagram</Link>
              {' • '}
              <Link href={links.social.linkedin} style={styles.link}>LinkedIn</Link>
              {' • '}
              <Link href={links.website} style={styles.link}>Website</Link>
            </Text>

            <Text style={styles.footerInfo}>
              Associação Fundo Patrimonial Patronos<br />
              CNPJ: 40.418.520/0001-33<br />
              Jd. Nossa Senhora Auxiliadora, 257 - Campinas, SP
            </Text>

            <Text style={styles.footerTagline}>
              Acelerando a missão acadêmica da Unicamp
            </Text>

            <Text style={styles.footerLinks}>
              <Link href={`${links.website}/sobre-nos/contato`} style={styles.link}>Contato</Link>
              {' • '}
              <Link href={`${links.website}/sobre-nos/transparencia`} style={styles.link}>Transparência</Link>
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

// Estilos inline para compatibilidade com clientes de email
const styles = {
  body: {
    backgroundColor: '#ffffff',
    fontFamily: typography.fontFamily,
    margin: 0,
    padding: 0,
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0',
  },
  headerSection: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  headerContent: {
    marginTop: '32px',
    textAlign: 'center',
  },
  headerLabel: {
    margin: '16px 0',
    fontWeight: 600,
    fontSize: '18px',
    color: colors.gradient.stops.orange,
    lineHeight: '28px',
  },
  headerTitle: {
    margin: '8px 0 0 0',
    fontWeight: 600,
    fontSize: '36px',
    color: colors.text.primary,
    lineHeight: '36px',
  },
  headerDescription: {
    fontSize: '16px',
    color: colors.text.secondary,
    lineHeight: '24px',
    margin: '16px 0',
  },
  ctaSection: {
    marginTop: '32px',
    marginBottom: '32px',
    padding: '0 16px',
  },
  footer: {
    marginTop: '48px',
    paddingTop: '32px',
  },
  divider: {
    borderColor: '#E5E7EB',
    margin: '32px 0',
  },
  footerTitle: {
    fontSize: '16px',
    lineHeight: '28px',
    color: colors.text.secondary,
    fontWeight: 600,
    textAlign: 'center',
    margin: '0 0 16px 0',
  },
  socialLinks: {
    fontSize: '16px',
    lineHeight: '28px',
    color: colors.text.secondary,
    textAlign: 'center',
    margin: '0 0 24px 0',
  },
  footerInfo: {
    fontSize: '14px',
    lineHeight: '24px',
    color: colors.text.light,
    textAlign: 'center',
    margin: '0 0 16px 0',
  },
  footerTagline: {
    fontSize: '14px',
    lineHeight: '24px',
    color: colors.text.light,
    textAlign: 'center',
    margin: '0 0 16px 0',
    fontWeight: 600,
  },
  footerLinks: {
    fontSize: '14px',
    lineHeight: '24px',
    color: colors.text.light,
    textAlign: 'center',
    margin: '0',
  },
  link: {
    color: colors.text.secondary,
    textDecoration: 'none',
  },
};
