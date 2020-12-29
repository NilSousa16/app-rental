import React, { useEffect, useState } from 'react';

import { useAuth } from '../../hooks/auth';

import { useNavigation, useRoute } from '@react-navigation/native';

import { AsyncStorage } from 'react-native';

import { View } from 'react-native';

import CustomButton from '../../components/Button';

import { TextView, Topic, TextContract, Container, ButtonsArea} from './styles';

import TopMenu from '../../components/TopMenu';

const contractTerm = {
  title: 'Contrato de Locação de Equipamentos',
  dataLocator: 'NOME(XX), nacionalidade, estado civil, profissão, residente em(xxx), no bairro (XXX), portador do RG n°(XXX), inscrito no Cadastro das Pessoas Físicas do Ministério da Fazenda sob n.º (XXXX), doravante denominado LOCADOR e,',

  dataTenant: 'NOME(XX), nacionalidade, estado civil, profissão, residente em(xxx), no bairro (XXX), portador do RG n°(XXX), inscrito no Cadastro das Pessoas Físicas do Ministério da Fazenda sob n.º (XXXX),  doravante denominadaLOCATÁRIO, ambas as partes aqui representadas por quem de direito, temjusto e contratado entre si a locação dos equipamentos abaixodiscriminados; mediante as cláusulas e condições a seguir estipuladas.',

  topicOne: {
    nameTopic: '1 - OBJETO/VALOR',
    caput: 'Pelo presente instrumento o locador aluga à locatária os equipamentos abaixo discriminados, e se obriga locá-los nas condições estabelecidas neste contrato.',
    paragraph11: '1.1 O equipamento ora locado, será utilizado pelo próprio Locador para exercer suas funções de (XXX) ou para o fim pessoal de (XXXX)'
  },

  topicTwo: {
    nameTopic: '2 - ALUGUÉIS MENSAIS E REAJUSTES',
    paragraph21: 'O locatário pagará ao locador a quantia de R$(XXXX), com reajuste trimestral, de acordo com a variação do IPC, ou outro índice que estiver em vigor autorizado pelo Governo Federal. O aluguel mensal constitui o pagamento pelo uso do equipamento e será devido a partir do dia da assinatura do presente.',
  },

  topicThree: {
    nameTopic: '3 - MANUTENÇÃO, ASSISTÊNCIA TÉCNICA/SEGURO',
    paragraph31: 'A manutenção do equipamento, inclusive a troca de peças oriundas do desgaste natural de sua utilização, objeto do presente contrato, é de total responsabilidade do locador.',
    paragraph32: 'O locador deve manter o equipamento seguro, pois a locatária não terá nenhuma responsabilidade no que se refere a danos, roubo, ou perda do equipamento.',
    paragraph33: 'O locador deverá manter o equipamento em perfeitas condições de uso. Sendo responsável por qualquer dano ao equipamento, independente de culpa, fato atípico ou fato natural.',
  },

  topicFour: {
    nameTopic: '4 - PRAZO DE VIGÊNCIA DO CONTRATO',
    paragraph41: 'O presente contrato é estabelecido por prazo de (XXXX).',
  },

  topicFive: {
    nameTopic: '5 - RESCISÃO',
    paragraph51: '5.1 O locatário ou o Locador poderão rescindir o presente contrato a qualquer época, desde que comunique por escrito, com antecedência de 30 (trinta) dias. Findo tal prazo o Locador de devolver os equipamentos, objeto do presente contrato, em perfeitas condições, respondendo por quaisquer danos, sejam oriundos do uso ou transporte. Fica eleito o Foro da cidade Florianópolis, Estado Santa Catarina, como único competente, com renúncia a qualquer outro, por mais privilegiado que seja, para dirimir as questões que surgirem na execução deste contrato. E por estarem justos e contratados assinam o presente contrato em 2 (duas) vias de igual teor e forma, para os mesmos efeitos, com as testemunhas a seguir.'
  },
}

const Contract: React.FC = () => {
  const { user } = useAuth();  

  const route = useRoute();

  const navigation = useNavigation();

  const [listItensLocation, setListItensLocation] = useState([]);
  
  const storeOrder = async () => {
    
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    var hours = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();
    // Id Contrado
    // Nome da conta
    // Data e hora
    // lista dos pedidos
    // montar objeto

    var data = await AsyncStorage.getItem(`${user.id}`);

    var idGenerated = `${user.id}`;

    if(data == null){
      console.log('>>>>>>Entrou pela primeira vez');
      var newSolicitation = {
        solicitations: [
          {
            idOrder: `${date}${month}${year}${hours}${min}${sec}`,
            date: `${date}/${month}/${year}`,
            hours: `${hours}:${min}:${sec}`,
            requestingUserId: `${user.id}`,
            requestingUserName: `${user.name}`,
            listItens: listItensLocation,
          }
        ]
      }
      // Armazenando dados
      await AsyncStorage.setItem(`${idGenerated}`, JSON.stringify(newSolicitation));

    } else {
      // recuperar e editar
      
      console.log('>>>>>>Entrou para editar');

      var listSolicitations = JSON.parse(data);
      
      listSolicitations.solicitations.push(
        {
          idOrder: `${date}${month}${year}${hours}${min}${sec}`,
          date: `${date}/${month}/${year}`,
          hours: `${hours}:${min}:${sec}`,
          requestingUserId: `${user.id}`,
          requestingUserName: `${user.name}`,
          listItens: listItensLocation,
        }
      );

      // Armazenando dados
      await AsyncStorage.setItem(`${idGenerated}`, JSON.stringify(listSolicitations));
      
    }

    var updatedDate = await AsyncStorage.getItem(`${user.id}`);

    var newListSolicitations = JSON.parse(updatedDate);

    console.log(newListSolicitations.solicitations);
  }

  useEffect(() => {
    var list = route.params.listItensLocation;
    setListItensLocation(list);
  }, [route.params.listItensLocation]);

  return (
    <>
      <TopMenu />

      <TextView>
          { contractTerm.title }
      </TextView>

      <Container>
        <Topic>
          { contractTerm.topicOne.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicOne.caput }
          </TextContract>

          <TextContract>
            { contractTerm.topicOne.paragraph11 }
          </TextContract>

        <Topic>
          { contractTerm.topicTwo.nameTopic }
        </Topic>

          <TextContract>
              { contractTerm.topicTwo.paragraph21 }
          </TextContract>

        <Topic>
          { contractTerm.topicThree.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicThree.paragraph31 }
          </TextContract>

          <TextContract>
            { contractTerm.topicThree.paragraph32 }
          </TextContract>

          <TextContract>
            { contractTerm.topicThree.paragraph33 }
          </TextContract>

        <Topic>
          { contractTerm.topicFour.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicFour.paragraph41 }
          </TextContract>

        <Topic>
          { contractTerm.topicFive.nameTopic }
        </Topic>

          <TextContract>
            { contractTerm.topicFive.paragraph51 }
          </TextContract>

          <ButtonsArea>
            <View style={{width: 170}}>
              <CustomButton style={{height: 40}}
                onPress={
                  () => {
                    storeOrder();
                    navigation.navigate('Success', { listItensLocation });
                  }
                }
              >
                Aceitar
              </CustomButton>
            </View>

            <View style={{width: 170}}>
              <CustomButton style={{height: 40}}
                  onPress={
                    () => alert(`Esvaziar itens do carrinho`)
                  }
              >
                Cancelar
              </CustomButton>
            </View>
            
          </ButtonsArea>

      </Container>

      
    </>

    // <>
    //   <View style={{flex: 1, justifyContent: 'center'}}>
    //     <Text> </Text>
    //     <Text>Aguarde nosso contato.</Text>
    //     <Button
    //         onPress={() => navigation.navigate('Dashboard')}
    //         title="Voltar para dashboard"
    //     />
    //     {/* <Button title="Sair" onPress={signOut} /> */}
    //   </View>
    // </>
  );
};

export default Contract;
