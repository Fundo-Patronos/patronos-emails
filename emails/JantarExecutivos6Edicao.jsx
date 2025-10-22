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
 * 6ª Edição do Jantar de Executivos - Email de Confirmação
 * Email de agradecimento e lembrete para participantes confirmados
 */
export default function JantarExecutivos6Edicao() {
  return (
    <Html>
      <Head />
      <Preview>Hoje é o dia! 6ª Edição do Jantar de Executivos - Fundo Patronos</Preview>
      <Body style={{ backgroundColor: brand.colors.background.light, fontFamily: brand.typography.fontFamily.primary }}>
        <Container className="mx-auto max-w-[600px] rounded-[8px] bg-white p-[32px] my-[40px]">

          {/* Header Image */}
          <Section className="mb-[32px]">
            <Img
              src="https://raw.githubusercontent.com/YOUR_USERNAME/5.patronos-emails/main/public/images/Generic%20Email%20Header%20-%20Cover%20Image%20(600%20x%20200%20px).svg"
              alt="6ª Edição do Jantar de Executivos - Fundo Patronos"
              width="536"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '8px',
                display: 'block',
              }}
            />
            {/*
              Nota: Substitua YOUR_USERNAME pelo seu username do GitHub
              Ou hospede em: https://patronos.org/email-assets/images/hero-jantar-executivos.jpg
            */}
          </Section>

          {/* Título do Evento */}
          <Section className="text-center mb-[32px]">
            <Text
              className="m-0 font-semibold text-[14px] leading-[20px]"
              style={{ color: brand.colors.gradient.stops.orange, textTransform: 'uppercase', letterSpacing: '1px' }}
            >
              Hoje é o dia
            </Text>
            <Heading
              as="h1"
              className="m-0 mt-[12px] font-bold text-[32px] leading-[40px]"
              style={{ color: brand.colors.text.primary }}
            >
              6ª Edição do Jantar de Executivos
            </Heading>
            <Text
              className="m-0 mt-[8px] text-[16px] leading-[24px]"
              style={{ color: brand.colors.text.secondary }}
            >
              Uma noite dedicada ao futuro da Unicamp
            </Text>
          </Section>

          {/* Mensagem de Agradecimento */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 font-semibold text-[24px] text-gray-900 leading-[32px]"
            >
              Muito obrigado por confirmar sua presença!
            </Heading>
            <Text className="mt-[16px] mb-0 text-[16px] text-gray-600 leading-[28px]">
              É com grande alegria que recebemos você nesta noite especial. O Jantar de Executivos é um momento único de conexão entre líderes empresariais, alumni e amigos da Unicamp, todos unidos pelo propósito de transformar a educação superior no Brasil.
            </Text>
            <Text className="mt-[16px] mb-0 text-[16px] text-gray-600 leading-[28px]">
              Preparamos uma noite memorável com novidades importantes que marcarão o futuro do Fundo Patrimonial Patronos e do apoio aos estudantes da Unicamp.
            </Text>
          </Section>

          <Hr className="border-gray-200 my-[32px]" />

          {/* Novidades que Serão Apresentadas */}
          <Section className="mb-[32px]">
            <Heading
              as="h2"
              className="m-0 mb-[16px] font-semibold text-[20px] leading-[28px]"
              style={{ color: brand.colors.gradient.stops.orange }}
            >
              Novidades que Apresentaremos Hoje
            </Heading>
            <Text className="mt-[8px] mb-[24px] text-[16px] text-gray-600 leading-[28px]">
              Estamos animados para compartilhar quatro iniciativas transformadoras que consolidam nosso compromisso com a excelência e transparência:
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

          {/* Informações Práticas */}
          <Section className="mb-[32px]">
            <Heading
              as="h3"
              className="m-0 mb-[16px] font-semibold text-[18px] text-gray-900 leading-[28px]"
            >
              Informações Importantes
            </Heading>
            <Text className="m-0 text-[16px] text-gray-600 leading-[28px]">
              <strong style={{ color: brand.colors.text.primary }}>Horário:</strong> Consulte seu convite individual
              <br />
              <strong style={{ color: brand.colors.text.primary }}>Dress code:</strong> Traje executivo
              <br />
              <strong style={{ color: brand.colors.text.primary }}>Confirmação:</strong> Sua presença está confirmada
            </Text>
            <Text className="mt-[16px] mb-0 text-[14px] text-gray-500 leading-[24px]">
              Em caso de imprevistos de última hora, por favor, entre em contato conosco o quanto antes.
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

          {/* Call to Action */}
          <Section className="text-center mb-[32px]">
            <Button href={brand.links.website.home} variant="secondary">
              Conheça Mais Sobre o Fundo Patronos
            </Button>
          </Section>

          {/* Mensagem Final */}
          <Section className="mb-[32px]">
            <Text className="text-center text-[16px] text-gray-600 leading-[28px] italic">
              Estamos ansiosos para recebê-lo e compartilhar esta noite especial dedicada ao futuro da educação na Unicamp.
            </Text>
            <Text className="text-center text-[16px] font-semibold text-gray-900 leading-[28px] mt-[16px]">
              Até hoje à noite!
            </Text>
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
