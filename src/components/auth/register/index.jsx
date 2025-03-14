import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'
import { doCreateUserWithEmailAndPassword } from '../../../firebase/auth'