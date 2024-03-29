import { Command } from 'commander'
import inquirer from 'inquirer'
import { typeMapping, prompList } from './typeMapping'

const program = new Command()
program.version('0.1.4')
program.parse()

inquirer
  .prompt(prompList)
  .then((answers: { type: keyof typeof typeMapping }) => {
    typeMapping[answers.type]()
  })
