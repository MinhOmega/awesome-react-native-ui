import React, { useEffect, useState } from "react";

const TotalComponents: React.FC = () => {
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const importAll = (r: __WebpackModuleApi.RequireContext) => {
      return r.keys().map(r);
    };

    const jsonFiles = importAll(
      require.context("../../data", false, /\.json$/)
    );

    const totalComponents = jsonFiles.reduce(
      (acc, file) => acc + file.length,
      0
    );
    setTotal(totalComponents);
  }, []);

  return (
    <div>
      <p>
        We currently have <strong>{total}</strong> awesome UI components created
        by the React Native community!
      </p>
    </div>
  );
};

export default TotalComponents;
