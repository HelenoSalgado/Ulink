import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/services/http';

interface Token {
  firstName: string;
  access_token: string;
}

export const useAuth = defineStore('auth', () => {
  
  const token = ref(localStorage.getItem('token'));
  const user = ref(localStorage.getItem('user'));

  function setToken({firstName, access_token}: Token) {
    localStorage.setItem('token', access_token);
    localStorage.setItem('user', firstName);
    token.value = access_token;
    user.value = firstName;
  };

  async function checkToken() {
    try {
      const { data } = await http.get('auth/verify', {
        headers: {
           Authorization: token.value,
        }
      });
      if(data) return true;
    } catch (error) {
      let status = error?.response?.status;
      if(status === '401') return false;
    }

  };

  const isAuthenticated = computed(() => {
    if(token.value) return true
    return false;
  });

  function clear() {
    localStorage.removeItem('token');
    token.value = '';
  };

  return { 
    token,
    user,
    setToken,
    checkToken,
    isAuthenticated,
    clear
  };
})
