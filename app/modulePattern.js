export default function bank() {
  let balance = 0;
  let deposit = (amount) => {
    balance += amount;
  };

  let withdraw = (amount) => {
    balance -= amount;
  };

  let check = () => {
    return balance;
  };

  return { deposit, withdraw, check };
}

