import { Arg, Mutation, Query, Resolver, Float } from 'type-graphql';
import natural from 'natural';

let classifier = new natural.BayesClassifier();

@Resolver()
export default class AnalysisResolver {
  @Mutation(() => Boolean)
  async addClassifiers(@Arg('text', () => [[String]]) text: string[][]) {
    text.map((x) => classifier.addDocument(x[1], x[0]));
    classifier.train();
    return true;
  }

  @Mutation(() => Boolean)
  async clearClassifiers() {
    classifier = new natural.BayesClassifier();
    return true;
  }

  @Query(() => String)
  async classify(@Arg('sentence') sentence: string) {
    return classifier.classify(sentence);
  }

  @Query(() => Float)
  async sentiment(@Arg('sentence') sentence: string, @Arg('language') language: string) {
    let analyzer = new natural.SentimentAnalyzer(language, natural.PorterStemmer, 'afinn');
    return analyzer.getSentiment(new natural.WordTokenizer().tokenize(sentence));
  }
}
