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
} from '@react-email/components';
import {
  FeatureList,
  Button,
  brand,
} from '../src/components';

/**
 * 6ª Edição do Jantar de Executivos - Email de Agradecimento
 * Email pós-evento agradecendo pela presença e recapitulando novidades
 */
export default function JantarExecutivos6Edicao() {
  return (
    <Html>
      <Head />
      <Preview>Obrigado por uma noite inesquecível! 6ª Edição do Jantar de Executivos</Preview>
      <Body style={{ backgroundColor: brand.colors.background.light, fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] my-[40px]">

          {/* Header Image */}
          <Section className="mb-[32px]">
            <Img
              src="https://raw.githubusercontent.com/Fundo-Patronos/patronos-emails/main/public/images/Generic%20Email%20Header%20-%20Cover%20Image%20(600%20x%20200%20px).svg"
              alt="6ª Edição do Jantar de Executivos - Fundo Patronos"
              width="536"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
          </Section>

          {/* Título do Evento */}
          <Section className="text-center mb-[32px]">
            <Text
              className="m-0 font-semibold text-[14px] leading-[20px]"
              style={{ color: brand.colors.gradient.stops.orange, textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Muito obrigado!
            </Text>
            <Heading
              as="h1"
              className="m-0 mt-[12px] font-bold text-[32px] leading-[40px]"
              style={{ color: brand.colors.text.primary }}
            >
              Uma Noite Inesquecível
            </Heading>
            <Text
              className="m-0 mt-[8px] text-[16px] leading-[24px]"
              style={{ color: brand.colors.text.secondary }}
            >
              6ª Edição do Jantar de Executivos
            </Text>
          </Section>

          {/* Mensagem de Agradecimento */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 font-semibold text-[24px] text-gray-900 leading-[32px]"
            >
              Obrigado por fazer parte desta noite especial!
            </Heading>
            <Text className="mt-[16px] mb-0 text-[16px] text-gray-600 leading-[28px]">
              Foi com imensa alegria que recebemos você na noite de 22 de outubro na Sociedad Gastronomica, em São Paulo. O jantar preparado pelo Chef Julian Rigo, a companhia de líderes inspiradores e o ambiente acolhedor tornaram esta sexta edição verdadeiramente memorável.
            </Text>
            <Text className="mt-[16px] mb-0 text-[16px] text-gray-600 leading-[28px]">
              Momentos como este reforçam nossa convicção de que, juntos, somos capazes de transformar a educação superior no Brasil. Cada conversa, cada conexão e cada contribuição fortalecem nosso compromisso coletivo com a excelência e a perenidade da Unicamp.
            </Text>
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Novidades Apresentadas */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 mb-[16px] font-semibold text-[20px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Novidades Apresentadas no Jantar
            </Heading>
            <Text className="mt-[8px] mb-[24px] text-[16px] text-gray-600 leading-[28px]">
              Durante o evento, tivemos a honra de compartilhar quatro iniciativas transformadoras que consolidam nosso compromisso com a excelência e transparência. Recapitulamos abaixo para que você possa revisitar e compartilhar:
            </Text>

            <FeatureList
              title=""
              description=""
              features={[
                {
                  title: 'Certificações de Contribuidores',
                  description: 'Um novo sistema de reconhecimento que celebra e valoriza cada doador, fortalecendo nossa comunidade de patronos e criando conexões mais profundas com nossos apoiadores.',
                },
                {
                  title: 'Novo Website',
                  description: 'Plataforma digital completamente renovada com design moderno, navegação intuitiva e recursos interativos que aproximam doadores, estudantes e a comunidade Unicamp.',
                },
                {
                  title: 'Parceria com VRB',
                  description: 'Colaboração estratégica que amplia nosso alcance e capacidade de impacto, trazendo novas oportunidades de desenvolvimento para estudantes e fortalecendo o ecossistema de inovação.',
                },
                {
                  title: 'Novo Edital de Bolsas e Talentos Confirmado para 2026',
                  description: 'Lançamento do maior programa de bolsas já realizado pelo Fundo Patronos, garantindo suporte financeiro e desenvolvimento de talentos para estudantes em vulnerabilidade socioeconômica.',
                },
              ]}
            />
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Gratidão e Impacto */}
          <Section className="mb-[32px]">
            <Heading
              as="h3"
              className="m-0 mb-[16px] font-semibold text-[20px] text-gray-900 leading-[28px]"
            >
              Seu Apoio Transforma Vidas
            </Heading>
            <Text className="m-0 text-[16px] text-gray-600 leading-[28px]">
              Graças à sua generosa contribuição e ao apoio de cada participante, seguimos fortalecendo o Fundo Patrimonial Patronos. Com mais de 2 mil alunos já apoiados e editais que ampliam o acesso à educação, cada doação se traduz em oportunidades reais de transformação.
            </Text>
            <Text className="mt-[16px] mb-0 text-[16px] text-gray-600 leading-[28px]">
              Que esta noite seja apenas o início de uma jornada ainda mais impactante juntos. Continuamos contando com você para construir o futuro da Unicamp.
            </Text>
          </Section>

          {/* Relatório Anual 2024 */}
          <Section className="mb-[32px]" style={{ backgroundColor: brand.colors.background.gray, borderRadius: '8px', padding: '24px' }}>
            <Heading
              as="h3"
              className="m-0 mb-[12px] font-semibold text-[18px] text-gray-900 leading-[28px] text-center"
            >
              📊 Relatório Anual 2024
            </Heading>
            <Text className="m-0 mb-[16px] text-[15px] text-gray-600 leading-[24px] text-center">
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

          {/* Mensagem Final e Próximos Passos */}
          <Section className="mb-[32px]">
            <Text className="text-center text-[16px] text-gray-600 leading-[28px]">
              Fique atento às próximas novidades e eventos do Fundo Patronos. Juntos, continuaremos transformando a educação superior no Brasil e inspirando a próxima geração de líderes.
            </Text>
            <Text className="text-center text-[16px] font-semibold text-gray-900 leading-[28px] mt-[16px]">
              Juntos, somos melhores!
            </Text>
          </Section>

          {/* Call to Action */}
          <Section className="text-center mb-[32px]">
            <Button href={brand.links.website.home} variant="secondary">
              Conheça Mais Sobre o Fundo Patronos
            </Button>
          </Section>

          {/* Footer */}
          <Hr className="border-gray-200 my-[32px]" />
          <Section>
            <Text className="text-center text-[14px] text-gray-500 leading-[24px] mb-[8px]">
              <strong style={{ color: brand.colors.text.primary }}>Fundo Patrimonial Patronos</strong>
              <br />
              Transformando a Unicamp por meio de doações
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
