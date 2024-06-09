package org.zerock.mallapi.domain;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@ToString
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "tbl_todo")
public class Todo {
	//Auto increment, sequence는 IDENTITY !!!
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long tno;
	
	@Column(length = 500, nullable = false)
	private String title;
	private String content;
	private boolean complete;
	private LocalDate dueDate;
}
