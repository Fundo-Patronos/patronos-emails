import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Read the exported HTML
const htmlPath = path.join(__dirname, '../../out/JantarExecutivos8Edicao.html');
const html = fs.readFileSync(htmlPath, 'utf-8');

// All recipient emails from CSV + consultants
const allEmails = [
  // Consultants
  'nina@mirada.in',
  'camila@mirada.in',
  // Donors from CSV
  'abel.souza@outlook.com',
  'adrianafuvivian@gmail.com',
  'drizon@gmail.com',
  'adriano@omachen.com.br',
  'a.blanco@morrowsodali.com',
  'alexandre@prestus.com.br',
  'alexandre.dona@gympass.com',
  'ahnunes@gmail.com',
  'allan.molivei@gmail.com',
  'eng.alvaroqueiroz@gmail.com',
  'aminadab.nunes@gmail.com',
  'cerchiar@yahoo.com.br',
  'anderson@thees.me',
  'andre.gonzalezsilva@gmail.com',
  'ap@quintoandar.com.br',
  'martinsgomes.andre@gmail.com',
  'amkimura@hotmail.com',
  'goto.andre@gmail.com',
  'andreaandrezo@hotmail.com',
  'arthurmoraeslago@gmail.com',
  'augustomafi@gmail.com',
  'b_lenharo@yahoo.com.br',
  'bruno.dilly@gmail.com',
  'brunonardon@gmail.com',
  'cacatc2003@gmail.com',
  'Carlo.genovez@gmail.com',
  'cadumady@gmail.com',
  'cetiburcio@gmail.com',
  'carlos.parizotto@cypress.com.br',
  'carloscazarotto@gmail.com',
  'Carlos.formigari@itau-unibanco.com.br',
  'cwatanab@gmail.com',
  'ciro_aragao@hotmail.com',
  'clarissa.avilla@gmail.com',
  'cyfukasawa@uol.com.br',
  'damien.d94@hotmail.fr',
  'fazoli.d@gmail.com',
  'daniel0592@gmail.com',
  'linsmattosda@gmail.com',
  'azevedo.daniel@bcg.com',
  'danieleramirez@yahoo.com.br',
  'danilo.halla@i.systems.com.br',
  'ogeidbr@gmail.com',
  'zilioti.diego@gmail.com',
  'edutex66@gmail.com',
  'eduardo_freitas@mckinsey.com',
  'eduardo@vesta.partners',
  'leonidas_eduardo@yahoo.com',
  'edu.m.sarti@gmail.com',
  'duda_oliveira@yahoo.com.br',
  'rsiqueira.eliane@gmail.com',
  'santos.barros@unifesp.br',
  'erica.jannini@gmail.com',
  'erika_saber@hotmail.com',
  'castro_fr@yahoo.com',
  'fabiosazevedo@gmail.com',
  'fabio227@gmail.com',
  'caldeira@alumniunicamp.org',
  'fabio_salim@yahoo.com.br',
  'fabio.henrique@pepsico.com',
  'fabiovianna05@gmail.com',
  'fabricio.bloisi@movile.com',
  'flima2210@gmail.com',
  'andriolif@gmail.com',
  'felipe.righetto@gmail.com',
  'felipelnascimento@gmail.com',
  'ffraeder@yahoo.com.br',
  'felvialim@gmail.com',
  'felipevigatoprado@gmail.com',
  'fhzaia@yahoo.com.br',
  'ferdinandomc@gmail.com',
  'fernando.batista@bridgeconsulting.com.br',
  'ffnielsen93@gmail.com',
  'altinierflavio@gmail.com',
  'flavio.stecca@ifood.com.br',
  'franabdala@gmail.com',
  'francisconsfranco@gmail.com',
  'francois_santos@yahoo.com',
  'frankfilho@gmail.com',
  'fredericorabreu@gmail.com',
  'gabrielrvborrasca@gmail.com',
  'gabrielplgomes@gmail.com',
  'Souza_g@outlook.com',
  'gfolego@gmail.com',
  'guishonorio@gmail.com',
  'guilhermetaiar@gmail.com',
  'grrolim@gmail.com',
  'barbieri@gmail.com',
  'gpintor@umich.edu',
  'gustavo.beltrami11@gmail.com',
  'gclaver@gmail.com',
  'helocarrer@hotmail.com',
  'henbis@gmail.com',
  'henriquefuschini@gmail.com',
  'hrmascarenhas@uol.com.br',
  'henrique.utrini@gmail.com',
  'hcrubellati@gmail.com',
  'hugorrm@gmail.com',
  'igor.mascarenhas@pier.digital',
  'souza.igorm@gmail.com',
  'igor.santiago@gmail.com',
  'isis@zweckconsultoria.com.br',
  'jander.medeiros@truxt.com.br',
  'jayanecborges@gmail.com',
  'joaocossi@gmail.com',
  'jao.curado@gmail.com',
  'joaopaulovd@gmail.com',
  'jorge_hargrave@yahoo.com.br',
  'jlfilho@gmail.com',
  'juliadasilvamonteiro@gmail.com',
  'klebereduardovicente@gmail.com',
  'kleber.stroeh@gmail.com',
  'laura.limalourenco@gmail.com',
  'lefarah@gmail.com',
  'leaguiar@alum.mit.edu',
  'coelho.leonardo.1973@gmail.com',
  'leo-f-m@hotmail.com',
  'leonardo.watanabegarcia@gmail.com',
  'lianamotta@gmail.com',
  'lidiane.franqui@yahoo.com.br',
  'liviafdiniz@gmail.com',
  'liviamartini@gmail.com',
  'lucasmoreira1992@gmail.com',
  'lucianafmoreira@gmail.com',
  'lucianomasson@gmail.com',
  'bittencourt.luis@hotmail.com',
  'luisf_spinardi@yahoo.com.br',
  'lgusttavo@yahoo.com.br',
  'lrbuff@uol.com.br',
  'Madoreira.Luiz@bcg.com',
  'manoel@lemos.net',
  'MARCELABORGES1983@GMAIL.COM.BR',
  'marcelo.farias@lnnano.cnpem.br',
  'marcelo.h.gumiero@gmail.com',
  'omarcelotoledo@gmail.com',
  'marcelo.versiani@hotmail.com',
  'marcio.marar@gmail.com',
  'marcos@mfaccioli.com',
  'mhiran@cypress.com.br',
  'mapgraciola@gmail.com',
  'Mariana.canivezi@gmail.com',
  'majer.mariana@gmail.com',
  'mariane.pereira@lnnano.cnpem.br',
  'maamgarten@gmail.com',
  'mparisorsi@gmail.com',
  'mariobeneshiguchi@gmail.com',
  'mario.sangenis@gmail.com',
  'markreim@gmail.com',
  'matheusggarcia@gmail.com',
  'mhlplima@gmail.com',
  'mrf_mariana@yahoo.com.br',
  'mstraussquimica@gmail.com',
  'mauriciopmuniz@gmail.com',
  'milenalimabrito@gmail.com',
  'mnq.oliveira@gmail.com',
  'murillo.cerqueiratr@gmail.com',
  'murilo.santhiago@lnnano.cnpem.br',
  'muriloendo@gmail.com',
  'nah.haddad@gmail.com',
  'nathaliaoyamamota@gmail.com',
  'newton.freire@protonmail.com',
  'oliviaramospolli@gmail.com',
  'omarj.dm@gmail.com',
  'natalinj@hotmail.com',
  'pablo.cavalcanti@inmetrics.com.br',
  'pomartinelli@gmail.com',
  'noije@unicamp.br',
  'pedro.deliberador@outlook.com',
  'pedrolulamota@outlook.com',
  'pedro_mmelo@me.com',
  'pliniomabello@gmail.com',
  'priscila88@gmail.com',
  'rmarchi@alvarezandmarsal.com',
  'rcarlos@alvarezandmarsal.com',
  'rafaelandia@hotmail.com',
  'rafael.ayres.fonseca@gmail.com',
  'rafael.coelho@gmail.com',
  'rafael.soares@abril.com.br',
  'Raphael_bozola@cargill.com',
  'raphael.santos@itaubba.com',
  'raphaelhcsantos@gmail.com',
  'rgscardoso@gmail.com',
  'nieto.regis@bcg.com',
  'renata.zacarias@gmail.com',
  'renato-luis.lopes@itau-unibanco.com.br',
  'renatopmourao@gmail.com',
  'rene@assano.org',
  'ricardovbotelho@gmail.com',
  'ricardo_capitanio@mckinsey.com',
  'rdtiezzi@gmail.com',
  'ricardo.a.silva-ferreira@itau-unibanco.com.br',
  'ricardorlz@gmail.com',
  'ricardowang@yahoo.com.br',
  'robertroders@gmail.com',
  'Rodolfo.d.alegre@gmail.com',
  'vianna.barbosa@gmail.com',
  'rodrigo.cardoso@mercadolivre.com',
  'rgouvea17@gmail.com',
  'rhussne@gmail.com',
  'rodrigozanettimorelli@gmail.com',
  'serginhoiq@yahoo.com.br',
  'silvana@ciandt.com',
  'stefani.sagawa@gmail.com',
  'sussumoe@yahoo.com.br',
  'taifuentes@yahoo.com.br',
  'thales.silva@itau-unibanco.com.br',
  'theotl@gmail.com',
  'thiago_vilani@yahoo.com.br',
  'tulio.vprado@gmail.com',
  'Vanessa.occhipinti@gmail.com',
  'vanessa.thomazella@siemens.com',
  'victorhochgreb@gmail.com',
  'victor.jpanetta@gmail.com',
  'victorshihliu@gmail.com',
  'vinicius1499@gmail.com',
  'vinicius.teixeira@bain.com',
  'vitorteixeira1201@gmail.com',
  'vwtomita@gmail.com',
  'wchang1993@gmail.com',
];

// Remove duplicates
const uniqueEmails = [...new Set(allEmails.map(e => e.toLowerCase().trim()))];

console.log(`Total unique recipients: ${uniqueEmails.length}`);

// Create batches of 40
const BATCH_SIZE = 40;
const batches = [];
for (let i = 0; i < uniqueEmails.length; i += BATCH_SIZE) {
  batches.push(uniqueEmails.slice(i, i + BATCH_SIZE));
}

console.log(`Total batches: ${batches.length}`);

// Send each batch
async function sendBatches() {
  const results = [];

  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`\nSending batch ${i + 1}/${batches.length} (${batch.length} recipients)...`);

    try {
      const response = await resend.emails.send({
        from: 'Fundo Patronos <contato@patronos.org>',
        to: 'contato@patronos.org',
        cc: 'contato@patronos.org',
        bcc: batch,
        replyTo: 'gustavo.beltrami@patronos.org',
        subject: 'Convite: 8ª Edição do Jantar de Executivos - Fundo Patronos',
        html: html,
      });

      console.log(`✅ Batch ${i + 1} sent! ID: ${response.data?.id || response.id || 'N/A'}`);
      results.push({ batch: i + 1, success: true, id: response.data?.id || response.id });

      // Wait 500ms between batches to avoid rate limiting
      if (i < batches.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error(`❌ Batch ${i + 1} failed:`, error.message);
      results.push({ batch: i + 1, success: false, error: error.message });

      // Save pending batches if we hit quota
      if (error.message.includes('quota') || error.message.includes('limit')) {
        const pendingEmails = batches.slice(i).flat();
        fs.writeFileSync(
          path.join(__dirname, '../../pending_jantar8.json'),
          JSON.stringify(pendingEmails, null, 2)
        );
        console.log(`\n⚠️ Saved ${pendingEmails.length} pending emails to pending_jantar8.json`);
        break;
      }
    }
  }

  // Summary
  console.log('\n========== SUMMARY ==========');
  const successful = results.filter(r => r.success).length;
  const failed = results.filter(r => !r.success).length;
  console.log(`Successful batches: ${successful}/${batches.length}`);
  console.log(`Failed batches: ${failed}`);
  console.log(`Total emails attempted: ${successful * BATCH_SIZE + (batches[successful - 1]?.length || 0)}`);
}

sendBatches();
