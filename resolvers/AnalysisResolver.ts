import { Arg, Mutation, Query, Resolver } from 'type-graphql';
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

  @Query(() => String)
  async classify(@Arg('sentence') sentence: string) {
    return classifier.classify(sentence);
  }
}
