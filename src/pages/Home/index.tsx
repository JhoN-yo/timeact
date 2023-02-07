import { Play } from 'phosphor-react'
import {
  CountDownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmoutnInput,
  Separator,
  StartCountDownButton,
  TaskInput,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">I will work on</label>
          <TaskInput id="task" placeholder="Name your project" />
          <label htmlFor="minutesAmount">during</label>
          <MinutesAmoutnInput
            id="minutesAmount"
            type="number"
            placeholder="00"
          />
          <span>minutes.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton disabled type="submit">
          <Play size={20} />
          Start
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
