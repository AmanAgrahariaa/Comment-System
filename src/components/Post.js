import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from "../comments/Comments";

const posts = [
    {
      id: 1,
      title: 'The Rise of Artificial Intelligence',
      content: `
        Artificial Intelligence (AI) has become an integral part of our daily lives. From virtual assistants to recommendation systems, AI technologies are shaping the way we interact with digital services. This post explores the evolution of AI, its current applications, and the potential impact it might have on various industries in the future.
  
        As AI continues to advance, researchers and engineers are pushing the boundaries of what machines can achieve. Topics such as machine learning, natural language processing, and computer vision are at the forefront of AI research. We'll delve into these concepts and discuss how they contribute to creating intelligent systems.
  
        Furthermore, ethical considerations surrounding AI are gaining prominence. Issues like bias in algorithms, job displacement, and data privacy require careful attention. We'll explore these ethical challenges and the ongoing efforts to ensure responsible AI development.
  
        Join us on a journey through the fascinating world of Artificial Intelligence and discover how it's reshaping the technological landscape.
      `,
    },
    {
      id: 2,
      title: 'Blockchain Technology: Beyond Cryptocurrencies',
      content: `
        While blockchain technology gained widespread recognition through cryptocurrencies like Bitcoin, its applications extend far beyond digital currencies. In this post, we'll explore the fundamental principles of blockchain and its transformative impact on various industries.
  
        Blockchain's decentralized and secure nature makes it an ideal candidate for revolutionizing sectors such as supply chain management, finance, and healthcare. We'll delve into real-world use cases where blockchain is enhancing transparency, traceability, and security.
  
        Smart contracts, another key feature of blockchain, are automating complex processes and reducing the need for intermediaries. We'll examine how these self-executing contracts are streamlining business operations and facilitating trust in digital transactions.
  
        Join us as we uncover the broader implications of blockchain technology and its potential to reshape traditional business models.
      `,
    },
    {
      id: 3,
      title: 'The Latest Trends in Virtual Reality (VR)',
      content: `
        Virtual Reality (VR) technology has made significant strides in recent years, transforming the way we experience digital content. This post explores the latest trends in VR, from advancements in hardware to innovative applications across various domains.
  
        VR is not limited to the gaming industry; it has found its way into education, healthcare, and entertainment. We'll discuss how VR is enhancing learning experiences, providing therapeutic interventions, and creating immersive entertainment content.
  
        The evolution of VR hardware, including headsets and controllers, is driving the accessibility and affordability of this technology. We'll highlight the key players in the VR hardware market and their contributions to the widespread adoption of VR.
  
        Additionally, emerging trends such as augmented reality (AR) and mixed reality (MR) are expanding the possibilities of immersive experiences. Join us as we navigate the ever-evolving landscape of Virtual Reality and its potential impact on various sectors.
      `,
    },
    {
      id: 4,
      title: 'The Future of Quantum Computing',
      content: `
        Quantum computing is poised to revolutionize the field of computation, offering unprecedented processing power and the ability to solve complex problems that are currently beyond the reach of classical computers. In this post, we'll explore the principles of quantum computing and its potential applications.
  
        Unlike classical bits that represent either 0 or 1, quantum bits or qubits can exist in multiple states simultaneously due to the principles of superposition. This unique property enables quantum computers to perform parallel computations, opening the door to solving complex mathematical problems and simulating quantum systems.
  
        Quantum computing holds promise in areas such as cryptography, optimization, and drug discovery. We'll delve into specific use cases where quantum algorithms could outperform classical counterparts and bring about transformative advancements.
  
        Despite the immense potential, challenges such as maintaining qubit coherence and error correction persist. We'll discuss the current state of quantum computing research and the race to achieve practical quantum advantage.
  
        Join us on a journey into the fascinating realm of quantum computing and explore its potential to redefine the future of information processing.
      `,
    },
    {
      id: 5,
      title: 'The Impact of 5G Technology on Connectivity',
      content: `
        The rollout of 5G technology is ushering in a new era of connectivity, promising faster speeds, lower latency, and the ability to support a massive number of connected devices. In this post, we'll explore the impact of 5G on various industries and the transformative changes it brings to communication networks.
  
        The increased bandwidth and reduced latency of 5G networks are enabling the widespread adoption of technologies such as the Internet of Things (IoT) and autonomous vehicles. We'll examine how 5G is catalyzing advancements in smart cities, healthcare, and manufacturing.
  
        The deployment of 5G is not without challenges, including infrastructure requirements and concerns about privacy and security. We'll discuss the ongoing efforts to address these challenges and ensure a seamless transition to the 5G era.
  
        Furthermore, 5G's influence on entertainment and media consumption is reshaping the way we access and experience content. Join us as we explore the implications of 5G technology on connectivity and its role in shaping the digital landscape.
      `,
    },
    {
      id: 6,
      title: 'Artificial Neural Networks: The Building Blocks of Deep Learning',
      content: `
        Deep learning, a subset of machine learning, owes much of its success to artificial neural networks. In this post, we'll unravel the intricacies of artificial neural networks and understand how they serve as the foundation for complex learning tasks.
  
        Inspired by the human brain, artificial neural networks consist of interconnected nodes organized into layers. We'll explore the architecture of neural networks, including input layers, hidden layers, and output layers, and how they process and transform information.
  
        The training process of neural networks involves adjusting weights and biases to minimize errors and improve accuracy. We'll delve into the backpropagation algorithm and gradient descent, essential components of the training process.
  
        Applications of artificial neural networks span various domains, from image and speech recognition to natural language processing. We'll showcase real-world examples where neural networks have demonstrated remarkable capabilities and discuss ongoing research to enhance their performance.
  
        Join us on a journey into the world of artificial neural networks and discover their pivotal role in advancing the field of deep learning.
      `,
    },
    {
      id: 7,
      title: 'The Evolution of Cybersecurity in the Digital Age',
      content: `
        As our reliance on digital technologies continues to grow, so does the importance of cybersecurity in safeguarding sensitive information and digital assets. This post traces the evolution of cybersecurity, from early concepts to the sophisticated defense mechanisms employed in the digital age.
  
        The rise of interconnected systems and the internet has created new challenges for cybersecurity professionals. We'll explore the historical development of cybersecurity practices and the pivotal moments that shaped the current landscape.
  
        Modern cybersecurity encompasses a range of technologies, including firewalls, encryption, and intrusion detection systems. We'll discuss how these tools work together to mitigate cyber threats and protect individuals, organizations, and governments.
  
        The ever-changing nature of cyber threats requires continuous innovation in cybersecurity strategies. We'll highlight emerging trends such as artificial intelligence and machine learning in bolstering cyber defenses and detecting sophisticated attacks.
  
        Join us as we delve into the evolution of cybersecurity and examine the strategies and technologies that defend against cyber threats in the digital age.
      `,
    },
    {
      id: 8,
      title: 'Augmented Reality: Bridging the Physical and Digital Worlds',
      content: `
        Augmented Reality (AR) is blurring the lines between the physical and digital realms, offering immersive experiences that enhance our perception of the world. In this post, we'll explore the principles of AR, its current applications, and the potential it holds for transforming various industries.
  
        Unlike virtual reality, which creates entirely immersive environments, AR overlays digital content onto the real world. We'll discuss the technologies that enable AR, including sensors, cameras, and display devices, and how they work together to create seamless augmented experiences.
  
        The applications of AR are diverse, ranging from gaming and entertainment to education and healthcare. We'll showcase examples of how AR is being utilized to provide interactive learning experiences, assist in medical procedures, and revolutionize retail and marketing.
  
        As AR technology continues to advance, the possibilities for innovation are limitless. Join us on a journey into the captivating realm of Augmented Reality and discover its potential to redefine how we interact with the world around us.
      `,
    },
    {
      id: 9,
      title: 'The Quantum Internet: A New Frontier in Communication',
      content: `
        As quantum computing pushes the boundaries of information processing, the concept of a Quantum Internet emerges as a revolutionary paradigm in communication. In this post, we'll explore the principles of quantum communication and the potential impact of a Quantum Internet on secure and efficient data transfer.
  
        The Quantum Internet relies on the principles of quantum entanglement and superposition to enable secure communication channels. We'll delve into the quantum key distribution protocols that form the foundation of quantum-secure communication.
  
        Unlike classical communication, where information is transmitted using bits, quantum communication utilizes qubits, providing inherent security against eavesdropping. We'll discuss how quantum networks can be established and the challenges associated with building a scalable Quantum Internet.
  
        The potential applications of a Quantum Internet span secure communication, quantum teleportation, and distributed quantum computing. Join us as we unravel the promises and challenges of the Quantum Internet and its role in the future of global communication.
      `,
    },
    {
      id: 10,
      title: 'The Role of Edge Computing in the Internet of Things (IoT)',
      content: `
        The Internet of Things (IoT) has transformed the way we interact with the world, connecting devices and enabling data-driven decision-making. This post explores the role of Edge Computing in enhancing the capabilities of IoT, addressing latency issues, and unlocking new possibilities for distributed computing.
  
        Edge Computing brings computation closer to the data source, reducing latency and enabling real-time processing of IoT-generated data. We'll discuss how Edge Computing architecture differs from traditional cloud-based approaches and its advantages in specific IoT scenarios.
  
        The integration of Edge Computing with IoT has implications for various industries, including healthcare, smart cities, and industrial automation. We'll showcase use cases where Edge Computing optimizes resource utilization, improves response times, and enhances overall system efficiency.
  
        Challenges such as security, scalability, and interoperability are critical considerations in the deployment of Edge Computing in IoT ecosystems. We'll explore strategies to address these challenges and ensure the seamless integration of Edge Computing into the IoT landscape.
  
        Join us as we navigate the convergence of Edge Computing and IoT and examine the transformative impact on the way we collect, process, and leverage data in the digital age.
      `,
    },
  ];

const Post = () => {
  const { id } = useParams();
  const postId = parseInt(id, 10);
  const post = posts.find(post => post.id === postId);

  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    
    // Add the comment to the post's comments array
    post.comments.push(comment);
    
    // Clear the comment input field
    setComment('');
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className='container'>
      <h1>{post.title}</h1>
      {/* <p>{post.content}</p> */}
      <p className="blog-content">{post.content}</p>


      <div>
        <Comments
    commentsUrl="http://localhost:3004/comments"
         currentUserId="0"
       /> 
      </div>
    </div>
  );
};

export default Post;
