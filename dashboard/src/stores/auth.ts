import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import http from '@/api/http';

interface Token {
  user: {
    id: string;
    firstName: string;
  };
  access_token: string;
}

//localStorage.getItem()

export const useAuth = defineStore('auth', () => {
  
  const token = ref(localStorage.getItem('token'));
  const dataUser = ref<string[] | any>(localStorage.getItem('user'));

  function setToken({user, access_token}: Token) {
    localStorage.setItem('token', access_token);
    localStorage.setItem('user', JSON.stringify(user));
    token.value = access_token;
    dataUser.value = user;
  };

  async function checkToken() {
    try {
      const { data } = await http.get('auth/verify', {
        headers: {
           Authorization: token.value,
        }
      });
      if(data) return true;
    } catch (error: any) {
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
    user: JSON.parse(dataUser.value),
    setToken,
    checkToken,
    isAuthenticated,
    clear
  };
})
