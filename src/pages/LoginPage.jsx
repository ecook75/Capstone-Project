import React from 'react'
import {LoginForm} from '../components/LoginForm'
import {SignUpForm} from '../components/LoginForm'
import { Stack, Container } from '@mui/material'

export default function LoginPage() {
  return (
    <div id = "LoginBackground">
        <Container sx = {{ position: "relative", top: 80 }}>
          <Stack direction="row" spacing={2}>
<LoginForm/>
<SignUpForm/>
</Stack>
        </Container>
        </div>
  )}

 