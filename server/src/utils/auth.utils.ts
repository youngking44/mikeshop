import bcrypt from 'bcrypt';

const comparePassword = async (candidatePassword: string, hashedPassword: string) => {
  const outcome = await bcrypt.compare(candidatePassword, hashedPassword);
  return outcome;
};

export default comparePassword;
