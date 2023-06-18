export const health = async (req: any) => {
  try {
    return {
      responseCode: 200,
      responseMessage: "Success",
      data: 'working perfect'
    };
  } catch (err) {
    return err;
  }
};


//check is profile Exist

